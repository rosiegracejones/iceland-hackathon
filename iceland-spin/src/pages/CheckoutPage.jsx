
import Product from "../components/Product";
export default function CheckoutPage() {
    return (

        <div className="basket">
            <h1>Checkout Page</h1>

        <div className="item">
            <div className="buttons">
                <button className="delete-button" type="button">Delete</button>
            </div>
        </div>    

        <div className="product">
            <Product/>
         </div>

         <div className="quantity">
            <button className="plus-button" type="button" name="button">-</button>
            <input type="text" name="name" value="1"/>
            <button className="minus-button" type="button" name="button">+</button>
        </div>

        </div>
        
    )
}
      


