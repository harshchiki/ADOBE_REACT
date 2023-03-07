import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Product from "../model/Product";

export default function Details() {
    let [product, setProduct] = useState<Product | null>(null);
    let { id } = useParams();
    // Other option is get product from ProductContext getDetails(id);
    useEffect(() => {
            axios.get(`http://localhost:1234/products/${id}`).then(response => {
                setProduct(response.data);
            })
    }, [id]);

    return <div className="container">
        <h1>Product Details</h1>
        Name : {product?.productName} <br />
        <img src={product?.productImageUrl} /> <br />
        Description : {product?.productDescription}
    </div>
}