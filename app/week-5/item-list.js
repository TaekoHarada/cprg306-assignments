"use client";

import Item from "./item";
import { useState, useEffect } from "react";
import jsonItems from "./items.json";

export default function ItemList() {
  const sortItem = ["name", "quantity", "category"];
  const [sortBy, setSortBy] = useState(sortItem[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(jsonItems);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(sortBy);
    const sortedItems = [...items];

    if (sortBy == sortItem[0]) {
      sortedItems.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sortBy == sortItem[1]) {
      sortedItems.sort((a, b) => {
        return a.quantity - b.quantity;
      });
    } else if (sortBy == sortItem[2]) {
      sortedItems.sort((a, b) => {
        return a.category.localeCompare(b.category);
      });
    }

    setItems(sortedItems);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sortItem">Sort Item: </label>
          <select
            id="sortItem"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            required
          >
            {sortItem.map((optionValue, index) => (
              <option key={index} value={optionValue}>
                {optionValue}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 pt-5">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-sm py-2 px-4 rounded"
          >
            Sort
          </button>
        </div>
      </form>

      <div>
        {items.map((item, index) => (
          <div className="border-solid border border-indigo-500 mt-6 mx-3 p-3">
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
