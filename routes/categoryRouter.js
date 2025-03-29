import { Router } from "express";
import { getCategories, getCategoryById } from "../controllers/categoryController.js";
import { createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";
const categoryRouter = Router();

// Define the routes for the category resource
categoryRouter.get("/", getCategories); // GET all categories
categoryRouter.get("/:id", getCategoryById); // GET category by ID
categoryRouter.post("/", createCategory); // POST a new category

