import { useContext, useEffect } from "react"
import { fetchProducts } from "../redux/ProductApi";
import { useAppDispatch, useAppSelector } from "../redux/store";
import ProductCard from "./ProductCard";


export default function ProductList() {
 let dispatch = useAppDispatch();
 let {status, list:products, error}  = useAppSelector(state => state.products);

 useEffect(() => {
    dispatch(fetchProducts()); // thunk call
 }, []);

 return <div className="container">
        <div className="row">
            {
                (status == "loading") ? <h1>Loading...</h1>:
                products.map(p => <ProductCard product={p} key ={p.id}/>)
            }
        </div>
    </div>
}