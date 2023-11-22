import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cart: [],
};

export const addToCart = createAsyncThunk(
    "auth/addToCart",
    async ({ encodedToken, product }) => {
        try {
            const response = await fetch("/api/user/cart", {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify({
                    product: product,
                }),
            });

            if (response.status === 201) {
                const json = await response.json();
                return json.cart;
            }
        } catch (error) {
            toast.error("Some error occurred. Cannot add to cart.", {
                position: "bottom-right",
            });
            console.error(error);
        }
    }
);

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async ({ productId, encodedToken }) => {
        try {
            const response = await fetch(`/api/user/cart/${productId}`, {
                method: "DELETE",
                headers: {
                    authorization: encodedToken,
                },
            });

            if (response.status === 200) {
                const json = await response.json();
                return json.cart;
            }
        } catch (error) {
            toast.error("Some error occurred. Cannot remove from cart.", {
                position: "bottom-right",
            });
            console.error(error);
        }
    }
);

export const productQuantityHandler = createAsyncThunk(
    "cart/productQuantityHandler",
    async ({ productId, type, encodedToken }) => {
        try {
            const response = await fetch(`api/user/cart/${productId}`, {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify({
                    action: {
                        type,
                    },
                }),
            });

            if (response.status === 200) {
                const json = await response.json();
                return json.cart;
            }
        } catch (error) {
            toast.error(
                "Some error occurred. Cannot increase/decrease quantity.",
                {
                    position: "bottom-right",
                }
            );
            console.error(error);
        }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        resetCart: (state) => {
            state.cart = [];
        },
    },
    extraReducers: {
        [addToCart.pending]: (state) => {
            state.status = "loading";
        },
        [addToCart.fulfilled]: (state, action) => {
            state.status = "success";
            state.cart = action.payload;

            toast.success("Added to cart", {
                position: "bottom-right",
            });
        },
        [removeFromCart.pending]: (state) => {
            state.status = "loading";
        },
        [removeFromCart.fulfilled]: (state, action) => {
            state.status = "success";
            state.cart = action.payload;
            toast.success("Removed from cart", {
                position: "bottom-right",
            });
        },

        [productQuantityHandler.pending]: (state) => {
            state.status = "loading";
        },
        [productQuantityHandler.fulfilled]: (state, action) => {
            state.status = "success";
            state.cart = action.payload;
            toast.success(`quantity increased/decreased`, {
                position: "bottom-right",
            });
        },
    },
});

export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;
