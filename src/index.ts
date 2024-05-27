import express, { type Express } from "express";
import { sequelize } from "./db";
import { ResponesHandler } from "./services/responseHandler";
import router from "./routes";

export const app: Express = express();
const port = 3000;
app.use(express.json());

sequelize.sync();
app.use(router);

export const server = app.listen(port, () => {
  console.log("Server connected.");
});
