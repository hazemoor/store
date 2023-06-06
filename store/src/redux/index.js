import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reduser';

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})