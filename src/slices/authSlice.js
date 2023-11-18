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

            return {
                encodedToken,
                foundUser,
                isLoggedIn: true,
            };
        }
    } catch (error) {
        console.error(error);
    }
});

export const signup = createAsyncThunk("auth/signup", async (userDetails) => {
    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(userDetails),
        });

        if (response.status === 201) {
            const { encodedToken, createdUser } = await response.json();

            localStorage.setItem("encodedToken", encodedToken);
            localStorage.setItem("user", JSON.stringify(createdUser));

            return { encodedToken, createdUser, isLoggedIn: true };
        }
    } catch (error) {
        console.error(error);
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.setItem("encodedToken", null);
            localStorage.setItem("user", null);

            state.isLoggedIn = false;
            state.encodedToken = null;
            state.user = {};
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = "loading";
        },
        [login.fulfilled]: (state, action) => {
            if (action.payload) {
                state.status = "success";
                state.user = action.payload.foundUser;
                state.encodedToken = action.payload.encodedToken;
                state.isLoggedIn = action.payload.isLoggedIn;
            }
        },
        [signup.pending]: (state) => {
            state.status = "loading";
        },
        [signup.fulfilled]: (state, action) => {
            if (action.payload) {
                state.status = "success";
                state.user = action.payload.createdUser;
                state.encodedToken = action.payload.encodedToken;
                state.isLoggedIn = action.payload.isLoggedIn;
            }
        },
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
