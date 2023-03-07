import ICart from "../model/Cart";
import Product from "../model/Product";

type Action = {
    type: "ADD_TO_CART",
    payload: Product
} | {type:"INCREMENT", payload:number} |
{type: "CLEAR_CART"};

type CartState = {
    products:ICart[],
    total: number
}
export default function CartReducer(state:CartState, action:Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const product = {...action.payload}; // product sent from ProductCard
            let item = {
               ...product,
               quantity: 1,
               amount: product.productPrice
            }
            let cartItems = state.products;
            let total = state.total += item.amount;
            return {
                products: [...cartItems, item], total
            };
        case "INCREMENT":
            let products = state.products;
            products.forEach(p => {
                if(p.id === action.payload) {
                    p.quantity++;
                    p.amount = p.productPrice * p.quantity;
                }
                // update the total ...
            });
            return {products, total:state.total};
        case "CLEAR_CART":
            return {products:[], total: 0.0}
        default:
            return state;
    }
}