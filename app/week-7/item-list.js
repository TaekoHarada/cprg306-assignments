"use client";

import Item from "./item";
import { useState, useEffect } from "react";

export default function ItemList({ passItems, onClickItem }) {
  const sortItem = ["name", "quantity", "category"];
  const [sortBy, setSortBy] = useState(sortItem[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(passItems);
  }, [passItems]);

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

  const onItemSelect = (item) => {
    console.log("Selected item:", item);
    onClickItem(item);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="border-solid border border-indigo-500 m-5 p-5 flex flex-wrap items-center"
      >
        <div>
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

        <div className="ms-3">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold text-sm py-2 px-4 rounded"
          >
            Sort
          </button>
        </div>
      </form>

      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="border-solid border border-indigo-500/50 mx-5  mt-3 p-2"
          >
            <Item item={item} onSelect={onItemSelect} />
          </div>
        ))}
      </div>
    </main>
  );
}
