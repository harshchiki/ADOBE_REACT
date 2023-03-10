import { useContext } from "react"
import { Button } from "react-bootstrap";
import { clearCart } from "../redux/CartSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

import CartList from "./CartList";

export default function Cart() {
    let {cart, total} = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    return <div className="container">
       {
        cart.map(product => <CartList product={product} key={product.id}/>)
       }
        <div className="row">
            <div className="col-md-8">&nbsp;</div>
            <div className="col-md-4">
               Total : {total}
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">&nbsp;</div>
            <div className="col-md-4">
                <Button onClick={() => dispatch(clearCart())}>checkout</Button>
            </div>
        </div>
    </div>
}