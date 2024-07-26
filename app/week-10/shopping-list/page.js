"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

// ADD: week-10
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  // ADD: week-10
  const { user } = useUserAuth();

  useEffect(() => {
    console.log("user.uid", user.uid);
    getItems(user.uid).then((items) => {
      setItems(items);
    });
  }, []);

  // Modified: week-10
  const handleAddItem = async (item) => {
    try {
      console.log("add item:", item);

      const docId = await addItem(user.uid, item);

      const items = await getItems(user.uid);

      setItems(items);

      console.log("Item added with ID:", docId);
    } catch (error) {
      console.error("Error handleAddItem:", error);
    }
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
