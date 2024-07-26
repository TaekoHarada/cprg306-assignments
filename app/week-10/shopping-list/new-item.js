"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const initialName = "";
  const initialQuantity = 1;
  const initialCategory = "Produce";
  const [name, setName] = useState(initialName);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [category, setCategory] = useState(initialCategory);

  const categoryOptions = [
    initialCategory,
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(newItem);

    onAddItem(newItem);

    setName(initialName);
    setQuantity(initialQuantity);
    setCategory(initialCategory);
  };

  return (
    <main>
      <div className="border-solid border border-indigo-500 m-5 p-5 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="quantity">Quantity: </label>
            <input
              id="quantity"
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="category">Category: </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categoryOptions.map((optionValue, index) => (
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
