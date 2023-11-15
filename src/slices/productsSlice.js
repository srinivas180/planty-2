import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filters: {
        sortBy: "",
        categories: [],
        rating: 0,
        search: "",
    },
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
    reducers: {
        setFilters: (state, action) => {
            state.filters[action.payload.filterName] =
                action.payload.filterValue;
        },
        setCategory: (state, action) => {
            state.filters.categories[action.payload] =
                !state.filters.categories[action.payload];
        },
        resetFilters: (state, action) => {
            state.filters = {
                sortBy: "",
                categories: [],
                rating: 0,
            };
        },
    },
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

export const { setFilters, setCategory, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;
