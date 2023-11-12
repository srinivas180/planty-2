import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../slices/productsSlice";
import authReducer from "../slices/authSlice";
import cartReducer from "../slices/cartSlice";
import wishlistReducer from "../slices/wishlistSlice";
import addressReducer from "../slices/addressSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        address: addressReducer,
    },
});
