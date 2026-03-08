import { Request, Response } from "express";
import BlockService from "./block.service";

export default class BlockController {
    static async listBlocksByUlbId(req: Request, res: Response) {
        try {
            const { Ulb_Id } = req.body;

            const {Block_Id} = req.body

            const blocks: any = await BlockService.listBlocksByUlbId(Block_Id);

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
