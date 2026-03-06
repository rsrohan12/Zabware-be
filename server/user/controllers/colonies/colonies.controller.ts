import { Request, Response } from "express";
import ColoniesService from "./colonies.service";

export default class ColoniesController {
    static async listColoniesByUser(req: Request, res: Response) {
        try {
            const { Ulb_Id, Comp_Master_Id } = req.body;

            const colonies: any =
                await ColoniesService.listColoniesByUlbIdCompMasterId(
                    Ulb_Id,
                    Comp_Master_Id
                );

            if (!colonies) {
                return res.send({
                    status: "error",
                    message: "invalid Ulb_Id",
                });
            }

            return res.status(200).send({
                status: 200,
                message: "colonies fetched successfully",
                data: colonies,
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
