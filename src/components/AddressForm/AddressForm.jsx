import { useState } from "react";

import "./AddressForm.css";

export function AddressForm({ toggleAddressForm }) {
    const [address, setAddress] = useState({
        title: "",
        houseNo: "",
        colony: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    });

    function handleInputChange(e) {
        setAddress((address) => ({
            ...address,
            [e.target.name]: e.target.value,
        }));
    }

    function resetForm() {
        setAddress({
            title: "",
            houseNo: "",
            colony: "",
            city: "",
            state: "",
            country: "",
            pinCode: "",
        });
    }

    return (
        <form
            className="column column--gap-20"
            onSubmit={(event) => {
                event.preventDefault();
                toggleAddressForm();
                resetForm();
            }}
        >
            <h2 className="address-form__heading">Add or Edit Address</h2>
            <input
                className="form__input"
                required={true}
                type="text"
                name="title"
                value={address.title}
                placeholder="Enter title, ex: Home or Office"
                onChange={handleInputChange}
            />
            <input
                className="form__input"
                required={true}
                type="text"
                value={address.houseNo}
                placeholder="House or Flat Number"
                name="houseNo"
                onChange={handleInputChange}
            />
            <input
                className="form__input"
                required={true}
                type="text"
                value={address.colony}
                placeholder="Colony"
                name="colony"
                onChange={handleInputChange}
            />
            <input
                className="form__input"
                required={true}
                type="text"
                value={address.city}
                placeholder="City"
                name="city"
                onChange={handleInputChange}
            />
            <input
                className="form__input"
                required={true}
                type="text"
                value={address.state}
                placeholder="State"
                name="state"
                onChange={handleInputChange}
            />
            <input
                className="form__input"
                required={true}
                type="number"
                value={address.pinCode}
                placeholder="Pincode"
                name="pinCode"
                onChange={handleInputChange}
            />
            <input
                className="form__input"
                required={true}
                type="text"
                value={address.country}
                placeholder="Country"
                name="country"
                onChange={handleInputChange}
            />
            <div className="address-form__buttons">
                <button
                    className="button button--secondary address-form__button"
                    onClick={(event) => {
                        event.preventDefault();
                        resetForm();
                        toggleAddressForm();
                    }}
                >
                    Cancel
                </button>
                <button
                    className="button button--primary form__submit address-form__button"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
