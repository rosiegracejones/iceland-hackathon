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
      

//     {"title": "Bio-D Laundry Liquid (Fragrence Free)", "price": , "image": },
//     {"title": "Cheeky Panda Bamboo Kitcken Towel (pack of 2)", "price": , "image": },
//     {"title": "Ecoffee cup - bonfrer (340mls)", "price": , "image": },
//     {"title": "Ecoforce Recyclable Multi-purpose Clothes (twin pack)", "price": , "image": },
//     {"title": "Loofco Washing Up Pads", "price": , "image": },
//     {"title": "Organicup Menstrual Cup", "price": , "image": },
//     {"title": "Reusable Sandwich Wrap", "price": , "image": },
//     {"title": "The Naked Shave Kit", "price": , "image": },
//     {"title": "Vegan Leather Lunch Bag", "price": , "image": }

