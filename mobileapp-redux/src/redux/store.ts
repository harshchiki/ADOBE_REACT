import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartReducer } from "./CartSlice";

// instead of createStore()
const store = configureStore({
    // combineReducers
    reducer:{
        cart: cartReducer
    }
});

// store.getState ==> cart, product, user, ...

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;

/*
function add(): number {
    return 100;
}

type T1 = ReturnType<typeof add>

async function doTask() {
    let response = await axios.get("https://json-placeholder.com/users");
    return response.data;
}
type ResponseType = ReturnType<typeof doTask>
*/