import "dotenv/config";
import { ClientTask } from "database/models";
import moment from "moment-timezone";
import ClientTaskService from "user/controllers/client-task/client.service";
import { TASK_STATUS_ENUM } from "@constants";

const getAllExpectedDates = (task) => {
    const { work_date, recurrence_no, recurrence_option } = task;
    const dates: string[] = [];

    const unit = recurrence_option.toLowerCase();
    const recurrenceStart = moment.utc(work_date).startOf("day");
    const today = moment.utc().startOf("day");

    let currentDate = recurrenceStart.clone();
    while (currentDate.isSameOrBefore(today)) {
        dates.push(currentDate.format());
        currentDate.add(recurrence_no, unit);
    }

    return dates;
};

const backfillMissingOccurrences = async () => {
    console.log("Backfilling missing task occurrences...");

    const tasks = await ClientTask.findAll({
        where: { is_repeating_task: 1 },
    });

    for (const task of tasks) {
        const { id, recurrence_no, recurrence_option } = task?.dataValues;
        if (!(recurrence_no > 0 && recurrence_option)) continue;

        const expectedDates = getAllExpectedDates(task);

        for (const date of expectedDates) {
            const exists = await ClientTaskService.taskOccurrenceExists(id, date);
            if (!exists) {
                await ClientTaskService.addTaskOccurrence({
                    client_task_id: id,
                    expected_occurrence_date: date,
                    original_occurrence_date: date,
                    status: TASK_STATUS_ENUM.NOT_STARTED,
                    time_taken: 0,
                });
            }
        }
    }

    console.log("Backfill complete.");
};

backfillMissingOccurrences().catch((err) => {
    console.error("Error in backfill script:", err);
    process.exit(1);
});
