import data from "../models/item.js";

const items = data.items;

function getItems(req, res) {
  res.render("index", { items: items });
}

function getItemById(req, res) {
  const id = req.params.id;
  console.log(id)
  const item = items.find((item) => item.size === id);
  console.log(item)
  if (item) {
    res.render("itemView", { item: item });
  } else {
    console.log("Item not found");
  }}
export { getItems, getItemById };