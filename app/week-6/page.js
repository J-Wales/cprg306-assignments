"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

const [, setName] = useState("");

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>

      <button onClick={() => setSortBy('name')}>Sort by Name</button>
      <button onClick={() => setSortBy('category')}>Sort by Category</button>

      {ItemList()}
    </main>
  );
}
