import { DataTypes } from "sequelize";
import { sequelize } from "../../config";
import { UserMasterModel } from "./mc_user_master";
import { BlockMasterModel } from "./mc_block_master";

export const UserDataModel = sequelize.define(
  "mc_user_data",
  {
    User_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    Email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Designation: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Mobile_Approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },

    DOB: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },

    Mobile: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },

    Ulb_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Father_Name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    Aadhar_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Pan_No: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Block_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "mc_user_data",
    timestamps: false,
    freezeTableName: true,
  }
);


UserMasterModel.hasOne(UserDataModel, {
  foreignKey: "User_Id",
});

UserDataModel.belongsTo(UserMasterModel, {
  foreignKey: "User_Id",
});

UserDataModel.belongsTo(BlockMasterModel, {
  foreignKey: "Block_Id",
});