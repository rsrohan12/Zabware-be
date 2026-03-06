import { asType } from "helpers/format-response";
import { IBlockMaster } from "user/controllers/blocks/block.types";
import { encode } from "utils/encode";
import { PropertyMasterModel } from "database/models/mc_property_master";

export class Properties {
    constructor() {}

    public async listPropertiesByCompMasterId(
        Comp_Master_Id: number
    ): Promise<IBlockMaster[] | null> {
        const records = await PropertyMasterModel.findAll({
            where: {
                Comp_Master_Id: Comp_Master_Id,
            },
            attributes: ["Id", "Property_Name"],
        });
        if (!records) return null;

        const encodedRecords = records.map((row: any) => ({
            id: encode(row.dataValues.Id),
            name: row.dataValues.Property_Name,
        }));
        return asType<IBlockMaster[]>(encodedRecords);
    }
}
