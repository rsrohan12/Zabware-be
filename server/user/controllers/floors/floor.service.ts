import { Block } from "user/models";
import { Floor } from "user/models/floors";

export default class FloorService {
    static async listFloorsByCompMasterId(Comp_Master_Id:number) {
        const obj = new Floor();
        const response = await obj.listFloorsByCompMasterId(Comp_Master_Id);
        return response;
    }
}
