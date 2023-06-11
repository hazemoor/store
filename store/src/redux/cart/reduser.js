import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        count: 0,
        totalPrice: 0
    },
    reducers: {
        increment(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            item.count++;
        },
        decrement(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            if (item.count === 1) {
                item.count = 1
            } else {
                item.count--
            }
        },
        addInCart(state, action) {
            const itemInCart = state.cart.find(item => item.id === action.payload.id)
            if (itemInCart) {
                item
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(
                item => item.id != action.payload
            )
        }
    }
})

export default cartSlice.reducer;
export const { increment, decrement, addInCart, removeFromCart } = cartSlice.actions;