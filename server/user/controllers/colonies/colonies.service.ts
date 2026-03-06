import { Colonies } from "user/models/colonies";

export default class ColoniesService {
    static async listColoniesByUlbIdCompMasterId(Ulb_Id: number,Comp_Master_Id:number) {
        const obj = new Colonies();
        const response = await obj.listColoniesByUlbIdCompMasterId(Ulb_Id,Comp_Master_Id);
        return response;
    }
}
