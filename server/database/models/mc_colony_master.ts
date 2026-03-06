import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const ColonyMasterModel = sequelize.define(
    "mc_colony_master",
    {
        Ulb_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Colony_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Status: {
            type: DataTypes.INTEGER,
        },
        Merla: {
            type: DataTypes.STRING,
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
        tableName: "mc_colony_master",
        timestamps: false,
        freezeTableName: true,
    }
);
