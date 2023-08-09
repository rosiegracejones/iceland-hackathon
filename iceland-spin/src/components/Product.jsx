import './product.css';
import useRandomizedProducts from "../hooks/UseRandomProducts";
import { useEffect, useState } from 'react';
import products from "../data/products.json";
import PrizePage from '../pages/PrizePage';
export default function Product( ) {
    const [discount, setDiscount] = useState(0);
    const randomProducts = useRandomizedProducts(products);
    const [basket, setBasket] = useState([]);
    
    const total = basket.reduce((acc, product) => acc + Number(product.price), 0);
    const [basketTotal, setBasketTotal] = useState(0);

    useEffect(() => {
    if (total > 0) {
        setBasketTotal(total);
    }
    }, [total]);

    console.log(basketTotal);
    function randomizeItems() {
        setBasket(randomProducts);
    }

    function removeItem(id) {
        const indexToRemove = id;
        const newBasket = basket.filter((_, index) => index !== indexToRemove);
        setBasket(newBasket);
    }
    
    function ApplyDiscount() {
        setBasketTotal(basketTotal - (discount * basketTotal));
    }

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
                <div className='basket'>
                <p>Basket Total: £{basketTotal}</p>
                    <button onClick={randomizeItems}>Randomize basket</button>
                    <button onClick={ApplyDiscount}>Apply Discount</button>
                    <PrizePage discount={discount} setDiscount={setDiscount}/>
                </div>
            </div>
        </>
    )
}

