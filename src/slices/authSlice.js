import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { email: "", password: "" },
    encodedToken: "",
    isLoggedIn: false,
};

export const login = createAsyncThunk("auth/login", async (userCredentials) => {
    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userCredentials),
        });

        if (response.status === 200) {
            const { encodedToken, foundUser } = await response.json();

            localStorage.setItem("encodedToken", encodedToken);
            localStorage.setItem("user", JSON.stringify(foundUser));

            return { encodedToken, foundUser };
        }
    } catch (error) {
        console.error(error);
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {
            state.status = "loading";
        },
        [login.fulfilled]: (state, action) => {
            state.status = "success";
            state.user = action.payload.foundUser;
            state.encodedToken = action.payload.encodedToken;
        },
    },
});

export default authSlice.reducer;
