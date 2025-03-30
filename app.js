import express from "express";
import itemRouter from "./routes/itemRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import path from "path";

import { fileURLToPath } from "url";
import item from "./models/item.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/", itemRouter);
app.use("/categories", categoryRouter);
app.use("/add", itemRouter);
app.use("/update", itemRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});