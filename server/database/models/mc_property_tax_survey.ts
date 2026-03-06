import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const PropertyTaxSurveyModel = sequelize.define(
  "mc_property_tax_survey",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    __Data_Id__: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    Ulb_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Comp_Master_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    UID: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Uidpmidc: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Surveyor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Status: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },

    Sr_No: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Sector_No_OR_Block: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Parcel_No: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },

    Page: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Property_Use: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Photograph_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Ph_Num: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },

    GPS_Point: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    Data_Lat: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Data_Lng: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    Last_Accessed_Time: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    Last_Accessed_From_Ip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Last_Accessed_By: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Collected_On: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    Checked_On: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    Checked_By: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "mc_property_tax_survey",
    timestamps: false,
    freezeTableName: true,
  }
);
