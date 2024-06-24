"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const handleAddItem = (item) => {
    console.log("handleAddItem", item);
  };

  return (
    <main>
      <NewItem onAddItem={handleAddItem} />

      <ItemList passItems={items} />
    </main>
  );
}
