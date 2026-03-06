import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const FloorMasterModel = sequelize.define(
    "mc_floor_master",
    {
        Floor_Name: {
            type: DataTypes.STRING,
        },
        Status: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Comp_Master_Id: {
            type: DataTypes.INTEGER,
        },
        Last_Accessed_Time: {
            type: DataTypes.DATE,
        },
        Last_Accessed_From_Ip: {
            type: DataTypes.INTEGER,
        },
        Last_Accessed_By: {
            type: DataTypes.INTEGER,
        },

    },
    {
        tableName: "mc_floor_master",
        timestamps: false,
        freezeTableName: true,
    }
);
