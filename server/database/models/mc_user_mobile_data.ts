import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const UserMobileDataModel = sequelize.define(
    "mc_user_mobile_data",
    {
        User_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },

        Token: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        Model: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        Model_Lock: {
            type: DataTypes.STRING,
            defaultValue:'1'
        },

        Login_Time: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        Logout_Time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "mc_user_mobile_data",
        timestamps: false,
        freezeTableName: true,
    }
);
