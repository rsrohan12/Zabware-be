import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PTSewerWaterModel = sequelize.define(
  "mc_pts_sew_wat",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    Pts_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Sew_Conn: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Sew_Conn_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Wat_Conn: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Wat_Conn_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Electricity_Conn: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Elec_Conn_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Street_Light: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    Property_Tax_Id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Disposal_Id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Respondent_Name: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    tableName: "mc_pts_sew_wat",
    timestamps: false,
    freezeTableName: true,
  }
);
