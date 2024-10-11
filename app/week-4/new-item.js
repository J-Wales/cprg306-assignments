'use client'

import { useState } from 'react'

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
            console.log(quantity);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            console.log(quantity);
        }
    };

    return (
        <main>
            <div>
            <button class="bg-red-500 p-1 m-2 rounded-md" onClick={()=>decrement()}>Decrement</button>
            </div>
            <div>
            <button class="bg-green-500 p-1 m-2 rounded-md" onClick={()=>increment()}>Increment</button>
            </div>
            {quantity}
        </main>
    );

}

