import { Request, Response } from "express";
import PropertiesService from "./properties.service";

export default class PropertiesController {
    static async listPropertiesByUser(req: Request, res: Response) {
        try {
            const { Comp_Master_Id } = req.body;

            const Properties: any = await PropertiesService.listPropertiesByCompMasterId(Comp_Master_Id);

            if (!Properties) {
                return res.send({
                    status: "error",
                    message: "invalid Comp_Master_Id",
                });
            }

            return res.status(200).send({
                status: 200,
                message: "Properties fetched successfully",
                data: Properties,
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
