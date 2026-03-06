import { ConstructionType } from "user/models/construction-type";

export default class ConstructionTypeService {
    static async listConstructionTypeByComMasterId(Comp_Master_Id: number) {
        const obj = new ConstructionType();
        const response = await obj.listConstructionTypeByComMasterId(Comp_Master_Id);
        return response;
    }
}
