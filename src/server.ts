import express from "express";
import { logger } from "./middlewares/logger";
import { env } from "./config/env";

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(env.port, () => {
  console.log(`Running On http://localhost:${env.port}`);
});
