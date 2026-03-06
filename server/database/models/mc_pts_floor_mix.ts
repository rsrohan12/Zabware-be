import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PTSFloorMixModel = sequelize.define(
  "mc_pts_floor_mix",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // ✅ ONLY ONE autoIncrement
    },

    Pts_Id: {
      type: DataTypes.INTEGER,
      allowNull: false, // ✅ FK, not autoIncrement
    },

    Floor_No: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Firm_Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Type_1: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },

    Type_2: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },

    F_Sub_Cat: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Residential_Cov_Area: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Residential_Cov_Areac: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Commercial_Cov_Area: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Commercial_Cov_Areac: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "mc_pts_floor_mix",
    timestamps: false,
    freezeTableName: true,
  }
);
