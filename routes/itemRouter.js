import { Router } from "express";
import { getItemById, getItems } from "../controllers/itemController.js";
const itemRouter = Router();

// Define the routes for the item resource
itemRouter.get("/", getItems); // GET all items
// itemRouter.get("/items", getItems); // GET all items
itemRouter.get("/items/:id", getItemById)
    
//     (req, res) => {
//   console.log("Params:", req.params);}); // GET item by ID

export default itemRouter;