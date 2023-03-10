import { createAsyncThunk } from "@reduxjs/toolkit"
import Product from "../model/Product"

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
      const response = await fetch(`http://localhost:1234/products`)
      const data:Product[] = await response.json();
      return data;
    }
  )

  //fetchProducts.pending
  //fetchProducts.fullfilled
  //fetchProducts.rejected