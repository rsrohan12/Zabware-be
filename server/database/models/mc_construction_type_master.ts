import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const ConstructionTypeMasterModel = sequelize.define(
    "mc_construction_type_master",
    {
        Construction_Type: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        Status: {
            type: DataTypes.INTEGER,
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
        tableName: "mc_construction_type_master",
        timestamps: false,
        freezeTableName: true,
    }
);
