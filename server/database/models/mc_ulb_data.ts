import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const UlbDataModel = sequelize.define(
  "mc_ulb_data",
  {
    Ulb_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    District: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Address: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    City_Code: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Short_Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "mc_ulb_data",
    timestamps: false,
    freezeTableName: true,
  }
);
