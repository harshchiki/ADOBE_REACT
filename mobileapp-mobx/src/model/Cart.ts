import Product from "./Product";

export default interface ICart extends Product {
    quantity:number;
    amount:number;
}