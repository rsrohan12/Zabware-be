import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PTSFloorInformationModel = sequelize.define(
  "mc_pts_floor_information",
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

    House_Flat_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Owner_Name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },

    Guardian: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },

    Father_Husband_Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Mobile_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Email_Id: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Construction_Year: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Age_Of_Building: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Locality_Name: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Road_Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Pincode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Floors_No: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Plot_Aarea_Biswa: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Plot_Area_Marla: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Plot_Area_Yard: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Plot_Area_Sqft: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Builtup_Area_Sqft: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Prop_Type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Does_Base: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Const_Type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "mc_pts_floor_information",
    timestamps: false,
    freezeTableName: true,
  }
);
