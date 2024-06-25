"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const handleAddItem = (item) => {
    console.log("handleAddItem", item);
  };

  const handleItemSelect = (clickItem) => {
    console.log("handleItemSelect", clickItem);
    const match = clickItem.name.match(/^[a-zA-Z\s]+/);
    const ItemName = match ? match[0].trim() : "";
    setSelectedItemName(ItemName);
  };

  return (
    <main>
      <NewItem onAddItem={handleAddItem} />
      <ItemList passItems={items} onClickItem={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
