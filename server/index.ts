import express from "express";
import ejs from "ejs";
import cors from "cors";
import router from "./routes";
import { connectToDatabase, sequelize } from "./config";
import sgMail from "@sendgrid/mail";
require("./database/models");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

declare global {
  interface BigInt {
    /** Convert to BigInt to string form in JSON.stringify */
    toJSON: () => string;
  }
}
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// Database connection
connectToDatabase();

const whitelist = [
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error("UNAUTHORIZED!"));
    }
  },
  credentials: true,
};

const server = express();
server.use(express.urlencoded({ limit: "10mb", extended: true }));
server.use(express.json({ limit: "10mb" }));
server.use(cors(corsOptions));
server.engine("html", ejs.renderFile);
server.set("view engine", "ejs");
server.use("/api", router);


export default server;
