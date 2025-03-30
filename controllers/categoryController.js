import data from "../models/item.js";

const categories = data.items;


function getAllCategories(req, res) {
    // const categories = data.items;
    console.log("All Categories:", categories);
    res.render("categoryView", { category: categories });
  }

function getCategories(req, res) {
    const categoryType = req.params.type; // Get type from URL
    console.log("Category Type:", categoryType);
    const filteredCategories = [...new Set(categories.filter(item => item.type === categoryType))];
    res.render("categoryView", { category: filteredCategories });
  }

export { getAllCategories, getCategories };