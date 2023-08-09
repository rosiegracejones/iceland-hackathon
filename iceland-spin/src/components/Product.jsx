import products from "../data/products.json";
import { useState, useEffect } from 'react';
import './product.css';

export default function Product() {

    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const randomNumbers = new Set();
        while (randomNumbers.size < 4) {
            const random = Math.floor(Math.random() * products.length);
            randomNumbers.add(random);
        }
        
        const selectedProducts = Array.from(randomNumbers).map(index => products[index]);
        setBasket(selectedProducts);

        
    }, []);

    const total = basket.reduce((acc, product) => acc + Number(product.price), 0);

    return (
        <>
            <div className="product-container">
                {basket.map((product, index) => {
                    return (
                        <div className="product-card" key={index}>
                            <img className="product-image" src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>cost: £{product.price}</p>
                        </div>
                    )
                })}
                <div>
                    <h4>Total: £{total}</h4>
                </div>
            </div>
        </>
    )
}

