import { Router } from "express";
import { getAllCategories, getCategories } from "../controllers/categoryController.js";
// import { createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";
const categoryRouter = Router();

// Define the routes for the category resource
categoryRouter.get("/", getAllCategories); // Get all categories
categoryRouter.get("/:type", getCategories); // Get categories by type


export default categoryRouter;