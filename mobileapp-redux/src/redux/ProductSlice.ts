import { createSlice } from "@reduxjs/toolkit";
import Product from "../model/Product";
import { fetchProducts } from "./ProductApi";

type ProductState = {
    status: "idle" | "loading";
    error: string | null;
    list: Product[]
}

const initialState:ProductState = {
    status: "idle",
    list: [],
    error: null
}

const ProductSlice = createSlice({
    "name": "products",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state,action) => {
            state.status = "loading";
            state.error = null;
            state.list = []
        });
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.status = "idle";
            state.error = null;
            state.list.push(...action.payload);
        });
        builder.addCase(fetchProducts.rejected, (state,action) => {
            state.status = "idle";
            state.error = action.payload as string;
            state.list = []
        });
    }
});

export const ProductReducer = ProductSlice.reducer;