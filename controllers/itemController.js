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

function getAddItem(req, res) {
  res.render("addItem");}

function postAddItem(req, res) {
  console.log("Received POST request to add item");
  const newItem = req.body;
  const itemWithIdFirst = {
    id: String(items.length + 1),
    ...newItem
  };
  items.push(itemWithIdFirst)
  console.log("Items after adding new item:", items);  // Logs updated items array to console.
  res.redirect("/");  // Redirecting to the home page.
}

function getUpdateItem(req, res) {
  const id = req.params.id;
  const item = items.find((item) => item.id === id);
  if (item) {
    res.render("updateItem", { item: item });
  } else {
    console.log("Item not found");
  }
}

function postUpdateItem(req, res) {
  const id = req.params.id;
  console.log("Received POST request to update item with ID:", id);
  const updatedData = req.body; // New data from the form
  console.log("Updated data:", updatedData);
  const itemIndex = items.findIndex((item) => item.id == id);
  console.log(itemIndex)
  if (itemIndex !== -1) {
    items[itemIndex] = {
      id: id, // Keep the original ID
      ...updatedData // Overwrite other properties
    };
    console.log("Updated item:", items[itemIndex]);
    res.redirect("/"); // Redirect to home or send a success response
  } else {
    console.log("Item not found");
    res.redirect("/"); // Redirect to home or send a success response
}}

export { getItems, getItemById,getAddItem, postAddItem,getUpdateItem, postUpdateItem };