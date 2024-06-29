import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    user: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload; // Set the entire cart items array
        },
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart(state) {
            state.items = [];
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        increaseItemQuantity(state, action) {
            const itemId = action.payload.id;
            const item = state.items.find(item => item.id === itemId);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemId = action.payload.id;
            const item = state.items.find(item => item.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity, setCart, setUser } = cartSlice.actions;

export default cartSlice.reducer;
