import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const TradeLicModel = sequelize.define(
  "mc_trade_lic",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // ✅ matches DB
    },

    Pts_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Pts_Floor_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Trade_Lic: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    Trade_Lic_No: {
      type: DataTypes.STRING(50), // ✅ FIXED
      allowNull: true,
    },
  },
  {
    tableName: "mc_trade_lic",
    timestamps: false,
    freezeTableName: true,
  }
);
