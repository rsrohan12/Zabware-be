import { asType } from "helpers/format-response";
import { IBlockMaster } from "user/controllers/blocks/block.types";
import { BlockMasterModel } from "database/models/mc_block_master";
import { encode } from "utils/encode";
import { ColonyMasterModel } from "database/models/mc_colony_master";

export class Colonies {
    constructor() {}

    public async listColoniesByUlbIdCompMasterId(
        Ulb_Id: number,
        Comp_Master_Id:number
    ): Promise<IBlockMaster[] | null> {

        const records = await ColonyMasterModel.findAll({
            where: {
                Ulb_Id: Ulb_Id,
                Comp_Master_Id:Comp_Master_Id
            },
            attributes: ["Id", "Colony_Name"],
        });
        if (!records) return null;

        const encodedRecords = records.map((row: any) => ({
            id: encode(row.dataValues.Id),
            name: row.dataValues.Colony_Name,
        }));
        return asType<IBlockMaster[]>(encodedRecords);

    }
}
