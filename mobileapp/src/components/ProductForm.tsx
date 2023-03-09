import axios from "axios";
import { useRef, useState } from "react";
// import { createRef, MutableRefObject, useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
    const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    // let [name, setName] = useState<string>();
    // let  [description, setDesc]  = useState<string>();
    // let [price, setPrice] = useState<number>();
   
    function submit() {
      
        // let product = {
        //     "productDescription":description,
        //     "productImageUrl": "/images/iphone-x-in-hand.jpg",
        //     "productName": name,
        //     "productPrice": price,
        //     "productQuantity": 5,
        //     "productSeller": "Apple"
        // }
        let product = {
            "productDescription":descRef?.current?.value,
            "productImageUrl": "/images/iphone-x-in-hand.jpg",
            "productName": nameRef?.current?.value,
            "productPrice": priceRef?.current?.value,
            "productQuantity": 5,
            "productSeller": "Apple"
        }
        axios.post("http://localhost:/1234/products", product).then(response => {
            console.log("Product added!!!");
            // update the ProductContext also
            navigate("/products");
        });
    }

    return <div className="container">
        Name <input type="text" ref={nameRef} /*onChange={(evt) => setName(evt.target.value)}*//> <br />
        Description <input type="text" ref={descRef}/*onChange={(evt) => setDesc(evt.target.value)}*//> <br />
        Price <input type="number" ref={priceRef}  /*onChange={(evt) => setPrice(+evt.target.value)}*//> <br/>
        <Button type="button" onClick={() => submit()}>Add Product</Button>
    </div>
}
