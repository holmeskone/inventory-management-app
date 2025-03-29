import item from "../item.js"

async function getItems(req, res) {
  res.render("index", { items: item.items });
  // try {
  //   const { brand } = req.params;
  //   const items = await item.getBrand(brand);
  //   if (!items) {
  //     return res.status(404).json({ message: "Item not found" });
  //   }
  //   res.send(items);
  //   res.render("index");
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
}

export { getItems };