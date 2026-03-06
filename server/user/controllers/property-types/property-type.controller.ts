import { Request, Response } from "express";
import BlockService from "./property-type.service";
import PropertyTypeService from "./property-type.service";

export default class PropertyTypesController {
    static async listPropertyTypeByUlbId(req: Request, res: Response) {
        try {
            const { Comp_Master_Id } = req.body;

            const PropertyTypes: any =
                await PropertyTypeService.listPropertyTypeByComMasterId(Comp_Master_Id);

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
