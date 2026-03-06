import { PropertyType } from "user/models/property-types";

export default class PropertyTypeService {
    static async listPropertyTypeByComMasterId(Comp_Master_Id: number) {
        const obj = new PropertyType();
        const response = await obj.listPropertyTypeByComMasterId(Comp_Master_Id);
        return response;
    }
}
