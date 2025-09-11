import { useState } from "react";
import "./index.css";
import Form from "./Form.js";
import Logo from "./Logo.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setitems] = useState([]);

  function handleAddItem(item) {
    setitems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function toogleItem(id) {
    setitems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm("Are you sure? Do you want to clear list!");
    if (confirm) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToogle={toogleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
