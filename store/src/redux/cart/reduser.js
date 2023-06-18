import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
        totalPrice: 0
    },
    reducers: {
        increment(state, action) {
            const itemFind = state.itemsInCart.find(item => item.id === action.payload)
            if (itemFind) {
                itemFind.count = itemFind.count + 1;
                state.totalPrice += itemFind.price;
            }
        },
        decrement(state, action) {
            const itemFind = state.itemsInCart.find(
              (card) => card.id === action.payload
            );
            if (itemFind.count === 1) {
              itemFind.count = 1;
            } else {
              itemFind.count = itemFind.count - 1;
              state.totalPrice -= itemFind.price;
            }
        },
        addInCart(state, action) {
            state.itemsInCart.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeFromCart(state, action) {
            const itemFind = state.itemsInCart.find(
                (item) => item.id === action.payload
            );
            state.totalPrice -= itemFind.price * itemFind.count;
            state.itemsInCart = state.itemsInCart.filter(
                (item) => item.id !== action.payload
            );
        }
    }
});

export default cartSlice.reducer;
export const { increment, decrement, addInCart, removeFromCart } = cartSlice.actions;