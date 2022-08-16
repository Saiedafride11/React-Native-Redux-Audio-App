import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import productReducer from './productSlice';


const rootReducer = combineReducers({
      counter: counterReducer,  // slice page name da dibo
      products: productReducer,  // slice page name da dibo
})

const store = configureStore({
      reducer: rootReducer
})

export default store;