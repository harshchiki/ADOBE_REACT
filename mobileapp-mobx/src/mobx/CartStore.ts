import { action, computed, makeObservable, observable } from "mobx";


export class CartItem {
 @observable
  productDescription: string = "";
  @observable
  id: number = 0;
  @observable
  productImageUrl: string = "";
  @observable
  productName: string = "";
  @observable
  productPrice: number = 0;
  @observable
  productQuantity: number = 0;
  @observable
  productSeller: string = "";
  @observable
  quantity:number = 0;
  @observable
  amount:number = 0;

  constructor(id:number, name:string, price:number, 
    qty:number, seller:string,  img: string,
    desc: string) {
        makeObservable(this);
        this.id = id;
        this.productName = name;
        this.productPrice = price;
        this.productImageUrl = img;
        this.productDescription = desc;
        this.productQuantity = qty;
        this.productSeller = seller;
        this.amount = this.productPrice;
        this.quantity = 1;
    }

    @action
    increment() {
        this.quantity++;
        this.amount = this.productPrice * this.quantity
    }
}

class CartStore {
    @observable
    cart:CartItem[] = [];
    constructor() {
        makeObservable(this);
    }

    // ProductCard
    @action
    addToCart(product:CartItem) {
        this.cart.push(product);
    }
    // CartList
    @action
    increment(id:number) {
        let product = this.cart.find(p => p.id == id);
        if(product) {
            product.increment();
        }
    }
    // console.log(obj.cartCount); 
    @computed
    get cartCount() {
        return this.cart.length;
    }

    // let cart = obj.getCart;

    @computed
    get getCart() {
        return this.cart;
    }

}

const cartStore = new CartStore();

export default cartStore;