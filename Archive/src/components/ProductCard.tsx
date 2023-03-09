import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Product from "../model/Product"

type Props = {
    product:Product
}
export default function ProductCard({product}:Props) {
  
    return <div className="col-md-4">
        <div className="card">
            <Link to={`/details/${product.id}`}>
                <img src={product.productImageUrl} />
            </Link>
            <div className="card-body">
                <p className="card-title">
                    {product.productName}
                </p>
                <p className="card-text">{product.productDescription}</p>
            </div>
            <div className="card-footer">
                <span className="left">Rs.{product.productPrice}</span>
                <span className="right">
                    <FontAwesomeIcon icon={faHeart} color="red" className="px-3"/>
                    <FontAwesomeIcon icon={faShoppingCart} 
                    color="blue"/>
                </span>
            </div>
        </div>
    </div>
}