import Product from "../components/Product";
import { useState } from "react";

export default function CheckoutPage({prize}) {
   
    
    return (
        <div className="basket">
             <h1>Your Basket</h1>
            <Product prize={prize}/>
        </div>
    )
}
      