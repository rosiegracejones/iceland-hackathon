import products from "../data/products.json";

export default function Product() {

    const numbers = new Set();
    for(let i = 0; i < products.length; i++) {
        const random = Math.floor(Math.random() * products.length);
        numbers.add(random);
    }
    const basket = [numbers];
    console.log(basket);
    return (
        <>
            <div className="product-container">
                {basket.map((product, index) => {
                    return (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

