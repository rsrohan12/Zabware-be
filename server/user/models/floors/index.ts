import { asType } from "helpers/format-response";
import { IBlockMaster } from "user/controllers/blocks/block.types";
import { BlockMasterModel } from "database/models/mc_block_master";
import { encode } from "utils/encode";
import { FloorMasterModel } from "database/models/mc_floor_master";

export class Floor {
    constructor() {}

    public async listFloorsByCompMasterId(
        Comp_Master_Id: number
    ): Promise<IBlockMaster[] | null> {

        const records = await FloorMasterModel.findAll({
            where: {
                Comp_Master_Id: Comp_Master_Id,
            },
            attributes: ["Id", "Floor_Name"],
        });
        if (!records) return null;

        const encodedRecords = records.map((row: any) => ({
            id: encode(row.dataValues.Id),
            name: row.dataValues.Floor_Name,
        }));
        return asType<IBlockMaster[]>(encodedRecords);

    }
}
