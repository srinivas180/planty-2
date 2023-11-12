import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
    addresses: [
        {
            _id: uuid(),
            title: "Home",
            houseNo: "4534",
            colony: "MG Colony",
            city: "Pune",
            state: "Maharashtra",
            country: "India",
            pinCode: "543234",
        },
    ],
};

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress: (state, action) => {
            state.addresses.push({ _id: uuid(), ...action.payload });
        },
        removeAddress: (state, action) => {
            state.addresses = state.addresses.filter(
                (address) => address._id !== action.payload
            );
        },
        editAddress: (state, action) => {
            state.addresses = state.addresses.map((address) =>
                address._id === action.payload._id ? action.payload : address
            );
        },
    },
});

export const { addAddress, removeAddress, editAddress } = addressSlice.actions;
export default addressSlice.reducer;
