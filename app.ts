import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { defineRoutes } from "./routes";
import { responseFormatter, passport } from "./middlewares";

dotenv.config();

import "./utils/db";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(responseFormatter);

defineRoutes(app);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
});
