import { asType } from "helpers/format-response";
import { IBlockMaster } from "user/controllers/blocks/block.types";
import { BlockMasterModel } from "database/models/mc_block_master";
import { encode } from "utils/encode";

export class Block {
    constructor() {}

    public async listBlocksByUlbId(
        Ulb_Id: number
    ): Promise<IBlockMaster[] | null> {

        const records = await BlockMasterModel.findAll({
            where: {
                Ulb_Id: Ulb_Id,
            },
            attributes: ["Id", "Block_Name"],
        });
        if (!records) return null;

        const encodedRecords = records.map((row: any) => ({
            id: encode(row.Id),
            name: row.Block_Name,
        }));
        return asType<IBlockMaster[]>(encodedRecords);

    }
}
