import crypto from "crypto";

import { UserMasterModel } from "database/models";
import { UserDataModel } from "database/models/mc_user_data";
import { UserMobileDataModel } from "database/models/mc_user_mobile_data";
import { UlbDataModel } from "database/models/mc_ulb_data";

import { encode } from "utils/encode";
import {
    IUlbData,
    IUserData,
    IUserMaster,
    IUserMobileData,
} from "user/controllers/user/user.types";
import { UserTypeEnum } from "helpers/enums";
import { asType } from "helpers/format-response";

export class User {
    constructor() {}

    public async login(
        username: string,
        password: string
    ): Promise<IUserMaster | null> {
        const salt = crypto
            .createHash("sha1")
            .update(
                crypto
                    .createHash("md5")
                    .update(process.env.APP_SALT || "5Tyh&_T56SD")
                    .digest("hex")
            )
            .digest("hex");

        const hashedPassword = crypto
            .createHash("sha1")
            .update(
                crypto
                    .createHash("md5")
                    .update(salt + password)
                    .digest("hex")
            )
            .digest("hex");

        const record = await UserMasterModel.findOne({
            where: {
                User_Name: username,
                Password: hashedPassword,
                Status: 1,
            },
            raw: true,
        });

        if (!record) return null;

        return {
            ...(asType<IUserMaster>(record) as IUserMaster),

            User_Type: Number(
                asType<IUserMaster>(record).User_Type
            ) as UserTypeEnum,
        };
    }

    public async handleMobileToken(
        userId: number,
        model: string
    ): Promise<{ token: string }> {
        const record = await UserMobileDataModel.findOne({
            where: { User_Id: userId, Model: model },
            raw: true,
        });

        if (record) {
            await UserMobileDataModel.update(
                { Login_Time: new Date() },
                { where: { User_Id: userId, Model: model } }
            );

            return {
                token:
                    (asType<IUserMobileData>(record) as IUserMobileData)
                        .Token ?? "",
            };
        }

        const token = encode(userId);

        await UserMobileDataModel.create({
            User_Id: userId,
            Token: token,
            Model: model,
            Model_Lock: "1",
            Login_Time: new Date(),
        });

        return { token };
    }

    public async getSyncStatus(userId: number): Promise<number> {
        // placeholder for Pts_User_Block_Sync_Model
        return 0;
    }

    public async getUserData(userId: number): Promise<IUserData | null> {
        const record = await UserDataModel.findOne({
            where: { User_Id: userId },
            attributes: ["User_Id", "Ulb_Id", "Mobile"],
            raw: true,
        });

        return record ? asType<IUserData>(record) : null;
    }

    public async getUlbInfo(ulbId: number): Promise<IUlbData | null> {
        const record = await UlbDataModel.findOne({
            where: { Ulb_Id: ulbId },
            raw: true,
        });

        return record ? asType<IUlbData>(record) : null;
    }

        public async getMobileToken(User_Id: number): Promise<IUserMobileData | null> {
        const record = await UserMobileDataModel.findOne({
            where: { User_Id: User_Id },
            raw: true,
        });

        return record ? asType<IUserMobileData>(record) : null;
    }
}
