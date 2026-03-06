import { Request, Response } from "express";
import { get } from "lodash";
import PropertyTaxSurveyService from "./survey.service";
import { COMP_MASTER_ID } from "helpers/enums";
import { decode } from "utils/encode";
import UserService from "../user/user.service";

export default class SurveyController {
    static async saveServeyForm(req: Request, res: Response) {
        try {
            let Comp_Master_Id;

            const ulbtoken = get(req.body, "ulbtoken", null);
            const securityToken = get(req.body, "securityToken", null);
            const utoken = get(req.body, "utoken", null);
            const block = get(req.body, "block", null);
            const id = get(req.body, "id", null);
            const parcel_id = get(req.body, "parcel_id", null);
            const unit_no = get(req.body, "unit_no", null);
            const page = get(req.body, "page", null);
            const land_status = get(req.body, "status", null);
            const lat = get(req.body, "lat", null);
            const lng = get(req.body, "lng", null);
            const pmidc = get(req.body, "pmidc", null);
            const owner_name = get(req.body, "owner_name", null);
            const house_flat_no = get(req.body, "house_flat_no", null);
            let image_id = get(req.body, "image_id", null);
            const mobile = get(req.body, "mobile", null);
            const father_husband_name = get(
                req.body,
                "father_husband_name",
                null
            );
            const pin_code = get(req.body, "pin_code", null);
            const guardian = get(req.body, "guardian", null);
            const email = get(req.body, "email", null);
            const locality_name = get(req.body, "locality_name", null);
            const const_yr = get(req.body, "const_yr", null);
            const age_of_building = get(req.body, "age_of_building", null);
            const road_name = get(req.body, "road_name", null);
            const const_type = get(req.body, "const_type", null);
            const builtup_area_sqft = get(req.body, "builtup_area_sqft", null);
            const merla = get(req.body, "merla", null);
            const yard = get(req.body, "yard", null);
            const sqft = get(req.body, "sqft", null);
            const plot_area_biswa = get(req.body, "plot_area_biswa", null);
            const property_use = get(req.body, "property_use", null);
            const floor_no = get(req.body, "floor_no", null);
            const does_base = get(req.body, "does_base", null);
            const builtup_area = get(req.body, "builtup_area", null);
            const sewer_no = get(req.body, "sewer_no", null);
            const water_no = get(req.body, "water_no", null);
            const electricity_no = get(req.body, "electricity_no", null);
            const floor_data = get(req.body, "floor_data", null);
            Comp_Master_Id = get(req.body, "Comp_Master_Id", 0);
            const property_tax_id = get(req.body, "property_tax_id", null);
            const disposal_id = get(req.body, "disposal_id", null);
            const property_use_text = get(req.body, "property_use_text", null);
            const userAgent = req.headers["user-agent"] || "";

            const isMobile =
                /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
                    userAgent
                );

            const deviceType = isMobile ? "MOBILE" : "DESKTOP";
            const street_light_option = get(
                req.body,
                "street_light_option",
                null
            );

            const respondent_name = get(req.body, "respondent_name", null);
            const ipAddress =
                (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
                req.socket.remoteAddress ||
                req.ip ||
                "0";

            if ((deviceType === "MOBILE") == true) {
                Comp_Master_Id = COMP_MASTER_ID;
            }
            if (image_id) {
                image_id = image_id.split(",")[0];
            }

            const payload = {
                block,
                id,
                parcel_id,
                unit_no,
                page,
                land_status,
                lat,
                lng,
                floor_data,
                pmidc,
                owner_name,
                house_flat_no,
                image_id,
                mobile,
                father_husband_name,
                pin_code,
                guardian,
                email,
                locality_name,
                const_yr,
                age_of_building,
                road_name,
                const_type,
                builtup_area_sqft,
                merla,
                yard,
                sqft,
                plot_area_biswa,
                property_use,
                floor_no,
                does_base,
                builtup_area,
                sewer_no,
                water_no,
                electricity_no,
                property_tax_id,
                disposal_id,
                property_use_text,
                street_light_option,
                respondent_name,
                ipAddress,
            };

            const decodedUtoken = decode(utoken);
            const mobileToken = await UserService.getUserMobileToken(
                Number(decodedUtoken)
            );

            if (mobileToken.Token !== securityToken) {
                return res.status(400).send({
                    status: 400,
                    message:
                        "not authorized to access Servey from SecurityToken invalid",
                });
            }

            if (decode(utoken) && decode(ulbtoken) && securityToken) {
                const survey = await PropertyTaxSurveyService.upsertData(
                    utoken,
                    Comp_Master_Id,
                    ulbtoken,
                    payload
                );

                if (survey.status === "error") {
                    return res.status(400).send({
                        status: "error",
                        message: survey.message,
                    });
                }

                if (survey.status === "success") {
                    return res.status(200).send({
                        status: 200,
                        message: "Property Servey upserted successfully",
                        data: survey,
                    });
                }
            } else {
                return res.status(400).send({
                    status: "error",
                    message: "Invalid any of your tokens ",
                });
            }
        } catch (err: any) {
            return res.status(500).send({
                status: "error",
                message: "Internal server error",
                error: err?.message,
            });
        }
    }
}
