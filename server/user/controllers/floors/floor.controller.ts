import { Request, Response } from "express";
import BlockService from "./floor.service";
import FloorService from "./floor.service";

export default class FloorController {
    static async listFloorsByCompMasterId(req: Request, res: Response) {
        try {
            const { Comp_Master_Id } = req.body;

            const blocks: any = await FloorService.listFloorsByCompMasterId(Comp_Master_Id);

            if (!blocks) {
                return res.send({
                    status: "error",
                    message: "invalid Ulb_Id",
                });
            }

            return res.status(200).send({
                status: 200,
                message: "Blocks fetched successfully",
                data: blocks,
            });

        } catch (err) {
            return res.status(500).send({
                status: "error",
                message: "Internal server error",
                error: err.message,
            });
        }
    }
}
