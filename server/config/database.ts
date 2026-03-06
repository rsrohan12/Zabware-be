import { Sequelize } from "sequelize";
import { CONFIG } from "./environment";

export const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USERNAME,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    port: Number(CONFIG.DB_PORT),
    dialect: "mariadb",
    logging: false,

    define: {
      timestamps: false,     
      freezeTableName: true, 
    },
  }
);

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
};
