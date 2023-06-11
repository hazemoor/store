import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reduser";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})