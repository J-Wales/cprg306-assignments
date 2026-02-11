"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item1 = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item1);

    alert(
      `Added item: ${item1.name} quantity: ${item1.quantity} category: ${item1.category}`
    );
  };

  return (
    <main>
      <form class="p-2 m-4 bg-slate text-black" onSubmit="handleSubmit(event)">
        <input
          class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          type="text"
          placeholder="Item name"
          required=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        <button class="bg-white" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </main>
  );
}
