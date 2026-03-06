import { Request, Response } from "express";
import UserService from "./user.service";
import { decode, encode } from "utils/encode";
import { UserTypeEnum } from "helpers/enums";
import BlockService from "../blocks/block.service";
import PropertiesService from "../properties/properties.service";
import ColoniesService from "../colonies/colonies.service";
import FloorService from "../floors/floor.service";
import PropertyTypeService from "../property-types/property-type.service";
import ConstructionTypeService from "../construction-type/construction-type.service";

export default class UserController {
    static async login(req: Request, res: Response) {
        try {
            const { username, password, model } = req.body;

            const user: any = await UserService.login(username, password);

            if (!user) {
                return res.send({
                    status: "user not exist",
                });
            }

            const response: any = {};
            const userId = user.User_Id;

            response.UToken = encode(userId);
            response.FullName = user.Full_Name;
            response.UserName = user.User_Name;

            const tokenData = await UserService.handleMobileToken(
                userId,
                model
            );

            response.SecurityToken = tokenData.token;

            if (user.User_Type === UserTypeEnum.USER) {
                response.Sync = await UserService.getSyncStatus(userId);
                let userData = await UserService.getUserData(userId);

                if (userData) {
                    response.mobile_no = userData.Mobile;

                    if (userData.Ulb_Id) {
                        response.UlbToken = encode(userData.Ulb_Id);
                        const ulbInfo = await UserService.getUlbInfo(
                            userData.Ulb_Id
                        );

                        response.UlbName = ulbInfo?.District;
                        response.UlbShortName = ulbInfo?.Short_Name;

                        response.block_ls =
                            await BlockService.listBlocksByUlbId(
                                userData.Ulb_Id
                            );

                        response.property_ls =
                            await PropertiesService.listPropertiesByCompMasterId(
                                user.Comp_Master_Id
                            );

                        response.const_type_ls =
                            await ConstructionTypeService.listConstructionTypeByComMasterId(
                                user.Comp_Master_Id
                            );

                        response.colony_ls =
                            await ColoniesService.listColoniesByUlbIdCompMasterId(
                                userData.Ulb_Id,
                                user.Comp_Master_Id
                            );

                        response.floor_ls =
                            await FloorService.listFloorsByCompMasterId(
                                user.Comp_Master_Id
                            );

                        response.property_type_ls =
                            await PropertyTypeService.listPropertyTypeByComMasterId(
                                user.Comp_Master_Id
                            );
                    }
                }
            }

            response.status = "success";

            return res.status(200).send(response);
        } catch (err) {
            return res.status(500).send({
                status: "error",
                message: "Internal server error",
                error: err.message,
            });
        }
    }
}
