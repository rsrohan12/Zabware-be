import { Request, Response } from "express";
import PropertyTypeService from "./construction-type.service";
import ConstructionTypeService from "./construction-type.service";

export default class ConstructionTypesController {
    static async listPropertyTypeByUlbId(req: Request, res: Response) {
        try {
            const { Comp_Master_Id } = req.body;

            const PropertyTypes: any =
                await ConstructionTypeService.listConstructionTypeByComMasterId(Comp_Master_Id);

            if (!PropertyTypes) {
                return res.send({
                    status: "error",
                    message: "invalid Comp_Master_Id",
                });
            }

            return res.status(200).send({
                status: 200,
                message: "PropertyTypes fetched successfully",
                data: PropertyTypes,
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
