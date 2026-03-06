import "dotenv/config";
import { ClientTask, TaskActivity, TaskOccurrence } from "database/models";
import moment from "moment-timezone";
import { Op } from "sequelize";

const fixFutureOccurrenceDates = async () => {
    console.log("Script started: fix-future-occurrence-dates");

    const occurrences = await TaskOccurrence.findAll({
        where: {status: {
            [Op.in]: ['APPROVED', 'READY_FOR_REVIEW', 'IN_PROGRESS']
        }},
    });

    for (const occurrence of occurrences) {
        const { id, client_task_id, expected_occurrence_date, updated_occurrence_date, original_occurrence_date } = occurrence?.dataValues;
        const occurrenceDate = expected_occurrence_date || original_occurrence_date;

        if (!updated_occurrence_date) {
            const firstActivity = await TaskActivity.findOne({
                where: {
                    task_occurrence_id: id,
                    action: 'STARTED',
                },
                order: [['action_performed_at', 'ASC']],
            });
    
            if (firstActivity) {
                const firstActivityDate = firstActivity.dataValues.action_performed_at;
                if (firstActivityDate && moment(occurrenceDate).isAfter(moment(firstActivityDate))) {
                    console.log(`C1: Updating occurrence ID ${id}: setting expected_occurrence_date from ${occurrenceDate} to ${firstActivityDate}`);
                    await TaskOccurrence.update(
                        { expected_occurrence_date: firstActivityDate, original_occurrence_date: firstActivityDate },
                        { where: { id } }
                    );
                }
            } else {
                const clientTask = await ClientTask.findOne({
                    where: { id: client_task_id },
                });
    
                if (clientTask) {
                    const workDate = clientTask.dataValues.work_date;
                    const fixStartDate = '2025-11-01'; // or current date
    
                    if (moment(occurrenceDate).isAfter(moment(fixStartDate)) && moment(occurrenceDate).isAfter(moment(workDate))) {
                        console.log(`C2: Updating occurrence ID ${id}: setting expected_occurrence_date from ${occurrenceDate} to ${workDate}`);
                        await TaskOccurrence.update(
                            { expected_occurrence_date: workDate, original_occurrence_date: workDate },
                            { where: { id } }
                        );
                    }
                }
            }
        }
    }

    console.log("Script completed: fix-future-occurrence-dates");
};

fixFutureOccurrenceDates().catch((err) => {
    console.error("Error in fix-future-occurrence-dates script:", err);
    process.exit(1);
})