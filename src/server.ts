import express from "express";
// import { logger } from "./middlewares/logger";
// import { env } from "./config/env";
import helmet from "helmet";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();
const app = express();
const logger = require("morgan");

app.use(helmet());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Running On http://localhost:${process.env.PORT}`);
});
