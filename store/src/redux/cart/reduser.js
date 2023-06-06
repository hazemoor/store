import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    itemsInCart: [],
    count: 0
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1 
        },
        decrement(state) {
            state.count = state.count - 1
        },
        addInCart(state, action) {
            state.itemsInCart.push(action.payload)
        }
    }
})

export default cartSlice.reducer;
export const {} = cartSlice.actions;