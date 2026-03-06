import { DataTypes } from "sequelize";
import { sequelize } from "../../config";
import { UserMasterModel } from "./mc_user_master";

export const BlockMasterModel = sequelize.define(
  "mc_block_master",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    Ulb_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Block_Name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },

    Sorting: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Comp_Master_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Last_Accessed_Time: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    Last_Accessed_From_Ip: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    Last_Accessed_By: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "mc_block_master",
    timestamps: false,
    freezeTableName: true,
  }
);

BlockMasterModel.belongsTo(UserMasterModel, {
  foreignKey: "Ulb_Id",
  targetKey: "User_Id",
});
