import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    products: [],
    categories: [],
    filters: {
        sortBy: "",
        categories: [],
        rating: 0,
        search: "",
    },
    status: "idle",
};

export const fetchCategories = createAsyncThunk(
    "products/categories",
    async () => {
        try {
            const response = await fetch("api/categories");
            if (response.status === 200) {
                const json = await response.json();
                return json.categories;
            }
        } catch (error) {
            toast.error("Some error occurred. Fetching categories failed.", {
                position: "bottom-right",
            });
            console.error(error);
        }
    }
);

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
            toast.error("Some error occurred. Fetching products failed.", {
                position: "bottom-right",
            });
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
        [fetchCategories.pending]: (state) => {
            state.status = "loading";
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.status = "success";
            state.categories = action.payload;
        },
    },
});

export const { setFilters, setCategory, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;
