import { useContext } from "react"
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext"
import CartList from "./CartList";

export default function Cart() {
    let {cart, checkout} = useContext(CartContext);
    return <div className="container">
        {
            cart.map(p => <CartList product={p} key={p.id} />)
        }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button onClick={() => checkout()}>checkout</Button>
            </div>
        </div>
    </div>
}