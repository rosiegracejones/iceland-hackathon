import products from "../data/products.json";

export default function Product() {
    return (
        <>
            <h1>Product Page</h1>
            <div className="product-container">
                {products.map((product, index) => {
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

