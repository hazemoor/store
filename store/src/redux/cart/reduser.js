import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalPrice: 0
    },
    reducers: {
        increment(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                item.count++
                state.totalPrice += item.price
            }
        },
        decrement(state, action) {
            const item = state.cart.find(
                item => item.id === action.payload
            );
            if (item.count === 1) {
                item.count = 1;
            } else {
                item.count--;
                state.totalPrice -= item.price;
            }
        },
        addInCart(state, action) {
            state.cart.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(
                item => item.id != action.payload
                
            )
            state.totalPrice -= action.payload.price
        }
    }
})

export default cartSlice.reducer;
export const { increment, decrement, addInCart, removeFromCart } = cartSlice.actions;