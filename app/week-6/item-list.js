"use client";

import { useState } from "react";
import Item from "./item.js";



export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");

  const items = [
    
  ];
  
  switch (sortBy) {
    case 'name':
      items.sort((a, b) => a.name - b.name);
      break;

    case 'category':
      items.sort((a, b) => a.category - b.category);
      break;
  }

  
  

      return (
        <main>
          <button type="button" onClick={setSortBy("name")}>Name</button>
          <button type="button" onClick={setSortBy("category")}>Category</button>
            <ul>
                <li>{Item(item1)}</li>
                <li>{Item(item2)}</li>
                <li>{Item(item3)}</li>
                <li>{Item(item4)}</li>
                <li>{Item(item5)}</li>
                <li>{Item(item6)}</li>
                <li>{Item(item7)}</li>
                <li>{Item(item8)}</li>
                <li>{Item(item9)}</li>
                <li>{Item(item10)}</li>
                <li>{Item(item11)}</li>
                <li>{Item(item12)}</li>
            </ul>
            
            
        </main>
      );
}