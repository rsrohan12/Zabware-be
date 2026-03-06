import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PropertyMasterModel = sequelize.define(
    "mc_property_master",
    {
        Comp_Master_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Property_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Status: {
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
        tableName: "mc_property_master",
        timestamps: false,
        freezeTableName: true,
    }
);
