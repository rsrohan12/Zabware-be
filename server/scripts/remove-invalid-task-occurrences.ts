import "dotenv/config";
import { ClientTask, TaskOccurrence } from "database/models";
import moment from "moment-timezone";
import { col, fn, Op, where } from "sequelize";
import { sequelize } from "config/database";

const getAllExpectedDates = (task) => {
    const { work_date, recurrence_no, recurrence_option } = task;
    const dates: string[] = [];

    const unit = recurrence_option.toLowerCase();
    const recurrenceStart = moment.utc(work_date).startOf("day");
    const today = moment.utc().startOf("day");

    let currentDate = recurrenceStart.clone();
    while (currentDate.isSameOrBefore(today)) {
        dates.push(currentDate.format("YYYY-MM-DD"));
        currentDate.add(recurrence_no, unit);
    }

    return dates;
};

const removeInvalidOccurrences = async () => {
    console.log("remove-invalid-task-occurrences: started");

    // remove occurrences with future dates
    const currentYear = new Date().getFullYear();
    await sequelize.query(
        `
            DELETE o 
            FROM task_occurrences o
            JOIN client_tasks t ON o.client_task_id = t.id 
            WHERE YEAR(o.expected_occurrence_date) > ${currentYear}
                AND t.is_repeating_task = 1;
        `,
        { raw: true }
    );
    console.log("remove-invalid-task-occurrences: step 1 completed");

    // remove duplicate occurrences
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0", { raw: true });
    await sequelize.query(
        `
        DELETE t1
        FROM task_occurrences t1
        JOIN task_occurrences t2
            ON t1.client_task_id = t2.client_task_id
            AND t1.expected_occurrence_date = t2.expected_occurrence_date
            AND t1.id > t2.id
        WHERE t1.updated_occurrence_date IS NULL 
            AND (t1.is_duplicate IS NULL OR t1.is_duplicate = 0)
            AND t1.status = 'NOT_STARTED'
        `,
        { raw: true }
    );

    console.log("remove-invalid-task-occurrences: step 2 completed");

    const tasks = await ClientTask.findAll({
        where: { is_repeating_task: 1 },
    });

    // remove invalid occurrences
    for (const task of tasks) {
        const { id, recurrence_no, recurrence_option } = task?.dataValues;
        if (!(recurrence_no > 0 && recurrence_option)) continue;

        const expectedDates = getAllExpectedDates(task);

        await TaskOccurrence.destroy({
            where: {
                client_task_id: id,
                [Op.or]: [
                    { is_duplicate: 0 },
                    { is_duplicate: { [Op.is]: null } },
                ],
                updated_occurrence_date: {
                    [Op.is]: null,
                },
                [Op.and]: [
                    where(fn("DATE", col("expected_occurrence_date")), {
                        [Op.notIn]: expectedDates,
                    }),
                ],
            },
            force: true,
        });
    }

    console.log("remove-invalid-task-occurrences: step 3 completed");

    // remove task activities with no occurrences
    await sequelize.query(
        `DELETE ta 
        FROM task_activities ta 
        WHERE ta.task_occurrence_id IS NOT NULL 
            AND ta.task_occurrence_id NOT IN (
                SELECT id FROM task_occurrences
            )
        `,
        { raw: true }
    );

    console.log("remove-invalid-task-occurrences: fully completed");
};

removeInvalidOccurrences().catch((err) => {
    console.error("Error in remove-invalid-task-occurrences script:", err);
    process.exit(1);
});
