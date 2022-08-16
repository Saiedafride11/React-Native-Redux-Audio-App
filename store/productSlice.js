import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PRODUCT_IMAGE_MAP } from '../data/product-image-map';

const initialState = {
      products: [],
      status: 'idle',
      error: null
  }

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      return res.json()
})

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: {
      [fetchProducts.pending] : (state, actions) => {
            state.status = "loading";
      },
      [fetchProducts.fulfilled] : (state, actions) => {
            const {payload} = actions;
            payload.products.forEach(product => {
                  product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
                  product.images = PRODUCT_IMAGE_MAP[product.name].images;
            })
            state.products = payload.products;
            state.status = "success";
      },
      [fetchProducts.rejected] : (state, actions) => {
            state.status = "failed";
      }
  }
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectStatus = state => state.products.status;

export default productSlice.reducer