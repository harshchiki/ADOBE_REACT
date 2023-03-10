import { observer } from "mobx-react-lite";
import { useContext } from "react"
import { Button } from "react-bootstrap";
import { CartContext } from "..";

import CartList from "./CartList";

function Cart() {
    let cartStore = useContext(CartContext);
    const cart = cartStore.getCart;
    return <div className="container">
       {
        cart?.map(product => <CartList product={product} key={product.id}/>)
       }
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button>checkout</Button>
            </div>
        </div>
    </div>
}

export default observer(Cart);