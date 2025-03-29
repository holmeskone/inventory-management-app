import express from "express";
import itemRouter from "./routes/itemRouter.js";
import path from "path";

import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use("/", itemRouter);
app.use("/items", itemRouter);
// app.use("/categories", categoryRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});