import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
};

export const addToWishlist = createAsyncThunk(
    "wishlist/addToWishlist",
    async ({ encodedToken, product }) => {
        try {
            const response = await fetch("/api/user/wishlist", {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify({
                    product,
                }),
            });

            if (response.status === 201) {
                const json = await response.json();
                return json.wishlist;
            }
        } catch (error) {
            console.error(error);
        }
    }
);

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {},
    extraReducers: {
        [addToWishlist.pending]: (state) => {
            state.status = "loading";
        },
        [addToWishlist.fulfilled]: (state, action) => {
            state.status = "success";
            state.wishlist = action.payload;
        },
    },
});

export default wishlistSlice.reducer;
