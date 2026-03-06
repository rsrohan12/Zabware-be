import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const UserActionsModel = sequelize.define(
  "mc_user_actions",
  {
    User_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    Menu_Id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    tableName: "mc_user_actions",  
    timestamps: false,          
    freezeTableName: true,     
  }
);
