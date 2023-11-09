import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const addToCart = createAsyncThunk("auth/addToCart", async (data) => {
    try {
        const response = await fetch("/api/user/cart", {
            method: "POST",
            headers: {
                authorization: data.encodedToken,
            },
            body: JSON.stringify({
                product: data.product,
            }),
        });

        if (response.status === 201) {
            const json = await response.json();
            return json.cart;
        }
    } catch (error) {
        console.error(error);
    }
});

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [addToCart.pending]: (state) => {
            state.status = "loading";
        },
        [addToCart.fulfilled]: (state, action) => {
            state.status = "success";
            state.cart = action.payload;
        },
    },
});

export default cartSlice.reducer;
