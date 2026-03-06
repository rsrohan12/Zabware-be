import { asType } from "helpers/format-response";
import { IBlockMaster } from "user/controllers/blocks/block.types";
import { encode } from "utils/encode";
import { ConstructionTypeMasterModel } from "database/models/mc_construction_type_master";

export class ConstructionType {
    constructor() {}

    public async listConstructionTypeByComMasterId(
        Comp_Master_Id: number
    ): Promise<IBlockMaster[] | null> {

        const records = await ConstructionTypeMasterModel.findAll({
            where: {
                Comp_Master_Id: Comp_Master_Id,
            },
            attributes: ["Id", "Construction_Type"],
        });
        if (!records) return null;

        const encodedRecords = records.map((row: any) => ({
            id: encode(row.dataValues.Id),
            name: row.dataValues.Construction_Type,
        }));

        return asType<IBlockMaster[]>(encodedRecords);

    }
}
