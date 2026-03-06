import { DataTypes } from "sequelize";
import { sequelize } from "../../config";

export const OccupiesDetailModel = sequelize.define(
  "mc_occupies_detail",
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // ✅ ONLY PK
    },

    Pts_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Pts_Floor_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Occ_Name: {
      type: DataTypes.STRING(200), // ✅ FIXED length
      allowNull: false,            // ✅ DB says NOT NULL
    },

    Rent_Val: {
      type: DataTypes.STRING(50),  // ✅ FIXED length
      allowNull: false,            // ✅ DB says NOT NULL
    },
  },
  {
    tableName: "mc_occupies_detail",
    timestamps: false,
    freezeTableName: true,
  }
);
