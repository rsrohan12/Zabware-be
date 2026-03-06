import { PropertyTaxSurveyPayload } from "user/controllers/property-tax-survey/survey.types";
import { decode, encode } from "utils/encode";
import { getPtsPermissions } from "./useMenuPermissionGuard";
import { PropertyTaxSurveyModel } from "database/models/mc_property_tax_survey";
import UserService from "user/controllers/user/user.service";
import { PTSewerWaterModel } from "database/models/mc_pts_sew_wat";
import { PTSFloorInformationModel } from "database/models/mc_pts_floor_information";
import { PTSFloorModel } from "database/models/mc_pts_floor_model";
import { PTSFloorMixModel } from "database/models/mc_pts_floor_mix";
import { FloorMasterModel } from "database/models/mc_floor_master";
import { TradeLicModel } from "database/models/mc_pts_trade_lic";
import { OccupiesDetailModel } from "database/models/mc_occupies_detail";
import { PtsFirmlModel } from "database/models/mc_pts_firm";

export class PropertyTaxSurvey {
    public async upsertData(
        uToken: string,
        comp_master_id: number,
        ulbToken: string,
        payload: PropertyTaxSurveyPayload
    ): Promise<any> {
        const uid = decode(uToken);
        const ulb_id = decode(ulbToken);

        const permissions = await getPtsPermissions(uid);

        const isUpdate = !!payload.id;

        if (isUpdate && !permissions.edit_permission_granted) {
            return {
                status: "error",
                msg: "You are not authorized to edit",
            };
        }

        if (!isUpdate && !permissions.add_permission_granted) {
            return {
                status: "error",
                msg: "You are not authorized to add",
            };
        }

        let existingSurvey: any = null;

        if (isUpdate) {
            existingSurvey = await PropertyTaxSurveyModel.findOne({
                where: {
                    __Data_Id__: payload.id,
                    Comp_Master_Id: comp_master_id,
                },
                raw: true,
            });
        }

        const user_id_encoded = encode(uid + new Date());

        const user_info = await UserService.getUserData(Number(uid));

        const collected_on = new Date();

        const checked_on = existingSurvey?.CheckedOn ?? null;
        const checked_by = existingSurvey?.CheckedBy ?? null;
        const Last_Accessed_By = uid ?? null;
        const sr_no = existingSurvey?.SrNo ?? null;
        const gps_point = existingSurvey?.GpsPoint ?? null;
        const remarks = existingSurvey?.Remarks ?? null;

        let pts_id;

        if (payload.page === 1) {
            const surveyPayload = {
                __Data_Id__: user_id_encoded,
                Ulb_Id: ulb_id,
                Comp_Master_Id: comp_master_id,

                UID: payload.unit_no || null,
                Uidpmidc: payload.pmidc || null,

                Surveyor: uid || null,
                Status: payload.land_status || null,
                Sr_No: sr_no || null,

                Sector_No_OR_Block: payload.block
                    ? decode(payload.block)
                    : null,

                Parcel_No: payload.parcel_id,

                Page: payload.page || null,

                Property_Use: payload.property_use
                    ? decode(payload.property_use)
                    : null,

                Photograph_Id: payload.image_id
                    ? decode(payload.image_id)
                    : null,

                Ph_Num: user_info.Mobile || null,

                GPS_Point: gps_point || null,

                Data_Lat: payload.lat || null,
                Data_Lng: payload.lng || null,

                Remarks: remarks || null,

                Collected_On: collected_on || null,
                Checked_On: checked_on || null,
                Checked_By: checked_by || null,

                Last_Accessed_Time: new Date(),
                Last_Accessed_From_Ip: payload.ipAddress,
                Last_Accessed_By: Last_Accessed_By || null,
            };

            // /* ================= UID DETAILS INFORMATION ================= */

            pts_id = await PropertyTaxSurveyModel.findOne({
                where: { __Data_Id__: payload.id },
                raw: true,
            });

            if (isUpdate && pts_id) {
                await PropertyTaxSurveyModel.update(surveyPayload, {
                    where: { __Data_Id__: payload.id },
                });
            } else {
                const data: any = await PropertyTaxSurveyModel.create(
                    surveyPayload
                );
                pts_id = data.dataValues.Id;
            }

            // /* ================= SEWER / WATER ================= */

            const sewerWater = await PTSewerWaterModel.findOne({
                where: { Pts_Id: pts_id },
                raw: true,
            });

            await PTSewerWaterModel.upsert({
                Id: sewerWater?.dataValues?.Id ?? undefined,
                Pts_Id: pts_id,
                Sew_Conn_No: payload.sewer_no,
                Wat_Conn_No: payload.water_no,
                Elec_Conn_No: payload.electricity_no,
                Street_Light: payload.street_light_option,
                Property_Tax_Id: payload.property_tax_id,
                Disposal_Id: payload.disposal_id,
                Respondent_Name: payload.respondent_name,
            });

            // /* ================= FLOOR INFORMATION ================= */

            const floorInfo = await PTSFloorInformationModel.findOne({
                where: { Pts_Id: pts_id },
                raw: true,
            });

            await PTSFloorInformationModel.upsert({
                Id: floorInfo?.dataValues?.Id ?? undefined,
                Pts_Id: pts_id,
                House_Flat_No: payload.house_flat_no,
                Owner_Name: payload.owner_name,
                Guardian: payload.guardian,
                Father_Husband_Name: payload.father_husband_name,
                Mobile_No: payload.mobile,
                Email_Id: payload.email,
                Construction_Year: payload.const_yr,
                Age_Of_Building: payload.Age_Of_Building,
                Locality_Name: payload.locality_name
                    ? decode(payload.locality_name)
                    : null,
                Road_Name: payload.road_name,
                Pincode: payload.pin_code,
                Floors_No: payload.floor_no ? decode(payload.floor_no) : null,
                Plot_Aarea_Biswa: payload.plot_area_biswa,
                Plot_Area_Marla: payload.merla,
                Plot_Area_Yard: payload.yard,
                Plot_Area_Sqft: payload.sqft,
                Builtup_Area_Sqft: payload.builtup_area_sqft,
                Does_Base: payload.does_base,
                Const_Type: payload.const_type
                    ? decode(payload.const_type)
                    : null,
            });

            /* ================= FLOORS / MIX ================= */

            if (payload.floor_data?.length) {
                await PTSFloorModel.destroy({ where: { Pts_Id: pts_id } });
                await PTSFloorMixModel.destroy({ where: { Pts_Id: pts_id } });

                const floorTypes = payload.floor_data.map((f) => f.type);
                const floorMasters: any = await FloorMasterModel.findAll({
                    where: { Floor_Name: floorTypes },
                    raw: true,
                });

                const floorTypeMap = Object.fromEntries(
                    floorMasters.map((f) => [f.Floor_Name, f.id])
                );

                for (const floor of payload.floor_data) {
                    const floorNo = floorTypeMap[floor.type];
                    const selfRental =
                        floor.self_rental?.toLowerCase() === "self" ? 1 : 2;

                    const ptf = await PTSFloorModel.create({
                        Pts_Id: pts_id,
                        Floor_No: floorNo,
                        F_Sub_Cat: floor.sub_cat,
                        Self_Rental: selfRental,
                        Cov_Area: floor.cov_area,
                    });

                    await TradeLicModel.create({
                        Pts_Id: pts_id,
                        Pts_Floor_Id: ptf.dataValues.Id,
                        Trade_Lic_No: floor.trade_license,
                    });

                    await OccupiesDetailModel.create({
                        Pts_Id: pts_id,
                        Pts_Floor_Id: ptf.dataValues.Id,
                        Occ_Name: floor.occupies_name,
                        Rent_Val: floor.rent_value,
                    });

                    if (
                        ["commercial", "industrial", "institutional"].includes(
                            payload.property_use_text
                        )
                    ) {
                        await PtsFirmlModel.create({
                            Pts_Id: pts_id,
                            Pts_Floor_Id: ptf.dataValues.Id,
                            Firm_Name: floor.firm,
                        });
                    }
                }
            }

            return {
                status: "success",
                msg: isUpdate ? "Survey Updated" : "Survey Inserted",
                id: isUpdate ? payload.id : user_id_encoded,
            };
        }

        return {
            status: "success",
            msg: "Page data saved",
        };
    }
}
