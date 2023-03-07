import { createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import axios from 'axios';

type ContextType = {
    products:Product[]
}

export const ProductContext = createContext<ContextType>({
    products:[]
});

type Props = {
    children:React.ReactNode
}
export default function ProductProvider(props:Props) {
    let [products, setProducts] = useState<Product[]>([]);
    // componentDidMount
    useEffect(() => {
        axios.get("http://localhost:1234/products").then(response => {
            setProducts(response.data);
        });
    },[]);

    return <ProductContext.Provider value={{products}}>
        {props.children}
    </ProductContext.Provider>
}

