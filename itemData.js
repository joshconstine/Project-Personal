const items = [
  {
    id: 1,
    name: "Pencils",
    description: "NO.2 pencil",
    price: "1.99",
  },
  {
    id: 2,
    name: "Paper",
    description: "college rulled 3 holes",
    species: "3.50",
  },
  {
    id: 3,
    name: "binder",
    description: "2 in. three hole binder",
    species: "5.50",
  },
];

let nextId = items.length + 1;

const getItems = () => [...items];
const addItem = (pet) => {
  items.push({ ...item, id: nextId++ });
};
const removeItem = (itemId) => {
  const id = item.findIndex((item) => item.id === itemId);
  if (id < 0) throw new Error("Item Not Found");
  items.splice(id, 1);
};

module.exports = {
  getItems,
  addItem,
  removeItem,
};
