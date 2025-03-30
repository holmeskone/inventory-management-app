import { Router } from "express";
import { getAddItem, postAddItem, getItemById, getItems, getUpdateItem,postUpdateItem } from "../controllers/itemController.js";
const itemRouter = Router();

// Define the routes for the item resource
itemRouter.get("/", getItems); // GET all items
// itemRouter.get("/items", getItems); // GET all items
itemRouter.get("/items/:id", getItemById)

itemRouter.get("/add", getAddItem); // GET add item form
itemRouter.post("/add",postAddItem); // POST item form


itemRouter.get("/update/:id", getUpdateItem); // GET update item form

itemRouter.post("/update/:id", postUpdateItem); // GET update item form


export default itemRouter;