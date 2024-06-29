// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        // Add other reducers here if needed
    },
});
