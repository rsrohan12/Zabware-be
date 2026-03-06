import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PtsFirmlModel = sequelize.define(
  "mc_pts_firm",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    Pts_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Pts_Floor_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Firm_Name: {
      type: DataTypes.STRING(200), 
      allowNull: true,             
    },
  },
  {
    tableName: "mc_pts_firm",
    timestamps: false,
    freezeTableName: true,
  }
);
