import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
      version: 1,
      blacklist: ['counter', 'products'],
  };

const rootReducer = combineReducers({
      counter: counterReducer,  // slice page name da dibo
      products: productReducer,  // slice page name da dibo
      cart: cartReducer,  // slice page name da dibo
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//       reducer: rootReducer
// })

const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}), // to ignore error
})

export default store;