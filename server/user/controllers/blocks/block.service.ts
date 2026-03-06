import { Block } from "user/models";

export default class BlockService {
    static async listBlocksByUlbId(Ulb_Id: number) {
        const obj = new Block();
        const response = await obj.listBlocksByUlbId(Ulb_Id);
        return response;
    }
}
