import data from "../models/item.js";

const categories = data.items;

const uniqueCategories = [...new Set(categories.map(item => item.type))];
  console.log(uniqueCategories);

function getCategories(req, res) {
  res.render("categoryView", { category: uniqueCategories });
}

// function getItemById(req, res) {
//   const id = req.params.id;
//   console.log(id)
//   const item = items.find((item) => item.size === id);
//   console.log(item)
//   if (item) {
//     res.render("itemView", { item: item });
//   } else {
//     console.log("Item not found");
//   }}
export { getCategories };