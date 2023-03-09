import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICart from '../model/Cart';

type CartState = {
    cart: ICart[],
    total: number
}
const initialState:CartState = {
    cart:[],
    total: 0.0
}

const cartSlice = createSlice({
    "name": "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICart>) => {
            state.cart.push({...action.payload});
            state.total = state.cart.map(item => item.amount).reduce( (a1, a2) => a1 + a2);
        },
        increment: (state, action:PayloadAction<number>) => {
            const item = state.cart.find(item => item.id === action.payload);
            if(item?.quantity) item.quantity++;
            state.total = state.cart.map(item => item.amount).reduce( (a1, a2) => a1 + a2);
        },
        clearCart: (state) => {
            state.cart = [];
            total : 0.0
        }
    }
});

export const {addToCart, increment, clearCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
