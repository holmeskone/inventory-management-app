const items = [
    { id: 1, brand: "Bryan" },
  { id: 2, brand: "Christian" },
  { id: 3, brand: "Jason" },
]

async function getBrand(brand) {
    return items.find(item => item.brand === brand);
  };

export default { getBrand };