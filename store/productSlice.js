import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LocalDATA, PRODUCT_IMAGE_MAP } from '../data/product-image-map';

const initialState = {
      products: LocalDATA,
      status: 'idle',
      error: null
  }

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
      const res = await fetch('http://103.28.121.57/api/products');
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
export const selectFeaturedProducts = state => state.products.products.filter( item => item.is_featured );
export const selectHeadphones = state => state.products.products.filter( item => item.category === 'headphones' );
export const selectEarphones = state => state.products.products.filter( item => item.category === 'earphones' );
export const selectSpeakers = state => state.products.products.filter( item => item.category === 'speakers' );
export const selectProductsById = (state, id) => state.products.products.find( product => product.id === id );

export default productSlice.reducer