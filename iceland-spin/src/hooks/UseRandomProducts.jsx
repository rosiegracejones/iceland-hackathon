
import { useState, useEffect } from 'react';

function useRandomizedProducts(products) {
const [randomItems, setRandomItems] = useState([]);

useEffect(() => {
    const randomNumbers = new Set();
    while (randomNumbers.size < 4) {
        const random = Math.floor(Math.random() * products.length);
        randomNumbers.add(random);
    }
    
    const selectedProducts = Array.from(randomNumbers).map(index => products[index]);
    setRandomItems(selectedProducts);
}, [products]);
    return randomItems;
}

export default useRandomizedProducts;