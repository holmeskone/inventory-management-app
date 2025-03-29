import { Router } from "express";
import { getItems } from "../controllers/itemController.js";
const itemRouter = Router();
// import { createItem, updateItem, deleteItem } from "../controllers/itemController.js";

// Define the routes for the item resource
itemRouter.get("/", getItems); // GET all items
// itemRouter.get("/:id", getItemById); // GET item by ID
// itemRouter.post("/", createItem); // POST a new item

export default itemRouter;