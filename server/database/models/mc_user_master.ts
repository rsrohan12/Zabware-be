import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const UserMasterModel = sequelize.define(
  "mc_user_master",
  {
    User_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    User_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Full_Name: {
      type: DataTypes.STRING,
    },

    Salt: {
      type: DataTypes.STRING,
    },

    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    User_Type: {
      type: DataTypes.STRING,
    },

    Comp_Master_Id: {
      type: DataTypes.INTEGER,
    },

    Link_Id: {
      type: DataTypes.INTEGER,
    },

    Status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "mc_user_master",  
    timestamps: false,          
    freezeTableName: true,     
  }
);
