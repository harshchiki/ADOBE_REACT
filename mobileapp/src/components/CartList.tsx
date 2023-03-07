import ICart from "../model/Cart"
import {Button} from 'react-bootstrap'
import { useContext } from "react"
import { CartContext } from "./CartContext"
type Props = {
    product:ICart
}
export default function CartList({product}:Props) {
    let {increment} = useContext(CartContext);
    return <div className="row">
       <div className="col-md-2">
        <img src={product.productImageUrl} style={{"width":"50px"}} />
       </div>
       <div className="col-md-2">{product.productName}</div>
       <div className="col-md-2">
            <Button variant="outline-primary" onClick={() => increment(product.id)}>+</Button> &nbsp;
            {product.quantity} &nbsp;
            <Button variant="outline-primary">-</Button>
       </div>
       <div className="col-md-2">Price {product.productPrice}</div>
      
       <div className="col-md-2">Amount {product.amount}</div>
    </div>
}