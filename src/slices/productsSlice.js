import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: "idle",
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await fetch("/api/products");
            if (response.status === 200) {
                const json = await response.json();
                return json.products;
            }
        } catch (error) {
            console.error(error);
        }
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = "loading";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = "success";
            state.products = action.payload;
        },
    },
});

export default productsSlice.reducer;
