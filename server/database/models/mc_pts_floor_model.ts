import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PTSFloorModel = sequelize.define(
  "mc_pts_floor",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    Pts_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Floor_No: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Firm_Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    F_Sub_Cat: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },

    Self_Rental: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },

    Cov_Area: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Cov_Areac: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "mc_pts_floor",
    timestamps: false,
    freezeTableName: true,
  }
);
