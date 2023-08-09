import './product.css';
import useRandomizedProducts from "../hooks/UseRandomProducts";
import { createContext, useState } from 'react';
import products from "../data/products.json";

export default function Product( ) {

    const randomProducts = useRandomizedProducts(products);
    const [basket, setBasket] = useState([]);

    // function ApplyDiscount() {
    //     let discount = 0.1;
    //     setBasketTotal(basketTotal - (discount * basketTotal));
    //     console.log(basketTotal);
    // }

    function randomizeItems() {
        setBasket(randomProducts);
    }

    function removeItem(id) {
        const indexToRemove = id;
        const newBasket = basket.filter((_, index) => index !== indexToRemove);
        setBasket(newBasket);
    }

    const total = basket.reduce((acc, product) => acc + Number(product.price), 0);

    return (
        <>
            <div className="product-container">
                <div className="product-list">
                    {basket.map((product, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <img className="product-image" src={product.image} alt={product.title} />
                                <h2>{product.title}</h2>
                                <p>Price: £{product.price}</p>
                                <button onClick={() => removeItem(index)}>Remove from basket</button>
                            </div>
                        )
                    })}
                </div>
                <div>
                <p>Basket Total: £{total}</p>
                    <button onClick={randomizeItems}>Randomize basket</button>
                    {/* <button onClick = {ApplyDiscount}> Apply discount</button> */}
                </div>
            </div>
        </>
    )
}

