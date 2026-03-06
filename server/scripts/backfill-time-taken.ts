import "dotenv/config";
import { TaskOccurrence } from "database/models";
import { TaskActivity } from "user/models";

const backfillTimeTaken = async () => {
    console.log("Backfilling time taken for task occurrences...");

    const taskOccurrences = await TaskOccurrence.findAll({
        where: { time_taken: 0 },
    });

    for (const occurrence of taskOccurrences) {
        const { id } = occurrence?.dataValues;

        const timeTaken = await TaskActivity.calculateTimeTakenForTaskOccurrence(
            id
        );

        console.log(`Updating time taken for Task Occurrence ID ${id}`);
        await TaskOccurrence.update(
            { time_taken: timeTaken },
            { where: { id } }
        );
    }

    console.log("backfill-time-taken complete.");
};

backfillTimeTaken().catch((err) => {
    console.error("Error in backfill-time-taken script:", err);
    process.exit(1);
});
