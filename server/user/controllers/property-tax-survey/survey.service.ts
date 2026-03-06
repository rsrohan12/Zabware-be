import { PropertyTaxSurvey } from "user/models/property-tax-survey";
import { PropertyTaxSurveyPayload } from "./survey.types";

export default class PropertyTaxSurveyService {
    static async upsertData(
        uid: string,
        comp_master_id: number,
        ulb_id: string,
        payload: PropertyTaxSurveyPayload
    ) {
        const obj = new PropertyTaxSurvey();
        const response = await obj.upsertData(
            uid,
            comp_master_id,
            ulb_id,
            payload
        );
        return response;
    }
}
