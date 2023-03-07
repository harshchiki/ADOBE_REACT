import axios from "axios";
import { useState } from "react";
// import { createRef, MutableRefObject, useRef } from "react";
import { Button } from "react-bootstrap";

export default function ProductForm() {
    let [name, setName] = useState<string>();
    let  [description, setDesc]  = useState<string>();
    let [price, setPrice] = useState<number>();
   
    function submit() {
        let product = {
            "productDescription":description,
            "productImageUrl": "/images/iphone-x-in-hand.jpg",
            "productName": name,
            "productPrice": price,
            "productQuantity": 5,
            "productSeller": "Apple"
        }

        axios.post("http://localhost:/1234/products", product).then(response => {
            console.log("Product added!!!");
            // update the ProductContext also
        });
    }

    return <div className="container">
        Name <input type="text" onChange={(evt) => setName(evt.target.value)}/> <br />
        Description <input type="text" onChange={(evt) => setDesc(evt.target.value)}/> <br />
        Price <input type="number" onChange={(evt) => setPrice(+evt.target.value)}/> <br/>
        <Button type="button" onClick={() => submit()}>Add Product</Button>
    </div>
}
