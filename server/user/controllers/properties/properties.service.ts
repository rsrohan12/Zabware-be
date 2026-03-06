import { Properties } from "user/models/properties";
export default class PropertiesService {
    static async listPropertiesByCompMasterId(Comp_Master_Id: number) {
        const obj = new Properties();
        const response = await obj.listPropertiesByCompMasterId(Comp_Master_Id);
        return response;
    }
}
