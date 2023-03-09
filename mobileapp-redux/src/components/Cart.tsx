import { useContext } from "react"
import { Button } from "react-bootstrap";

import CartList from "./CartList";

export default function Cart() {
    
    return <div className="container">
       
        <div className="row">
            <div className="col-md-10">&nbsp;</div>
            <div className="col-md-2">
                <Button>checkout</Button>
            </div>
        </div>
    </div>
}