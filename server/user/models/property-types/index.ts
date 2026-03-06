import { asType } from "helpers/format-response";
import { IBlockMaster } from "user/controllers/blocks/block.types";
import { encode } from "utils/encode";
import { PropertyTypeMasterModel } from "database/models/mc_property_type_master";

export class PropertyType {
    constructor() {}

    public async listPropertyTypeByComMasterId(
        Comp_Master_Id: number
    ): Promise<IBlockMaster[] | null> {
        const records: any = await PropertyTypeMasterModel.findAll({
            where: {
                Comp_Master_Id: Comp_Master_Id,
            },
            attributes: ["Id", "Property_Type_Name"],
        });
        if (!records) return null;

        const encodedRecords = records.map((row: any) => ({
            id: encode(row.dataValues.Id),
            name: row.dataValues.Property_Type_Name,
        }));

        return asType<IBlockMaster[]>(encodedRecords);
    }
}
