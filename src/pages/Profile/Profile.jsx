import { useState } from "react";

import { ProfileDetails } from "../../components/ProfileDetails/ProfileDetails";
import { Address } from "../../components/Address/Address";
import { AddressForm } from "../../components/AddressForm/AddressForm";
import { Modal } from "../../components/Modal/Modal";
import "./Profile.css";

export default function Profile() {
    const [showAddressForm, setShowAddressForm] = useState(false);

    const [address, setAddress] = useState({
        title: "",
        houseNo: "",
        colony: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    });
    const [isEditAddress, setIsEditAddress] = useState(false);

    function toggleAddressForm() {
        setShowAddressForm(!showAddressForm);
    }

    return (
        <>
            <div className="container column profile">
                <ProfileDetails />
                <Address
                    toggleAddressForm={toggleAddressForm}
                    setAddress={setAddress}
                    setIsEditAddress={setIsEditAddress}
                />
            </div>
            <Modal show={showAddressForm}>
                <AddressForm
                    toggleAddressForm={toggleAddressForm}
                    address={address}
                    setAddress={setAddress}
                    isEditAddress={isEditAddress}
                />
            </Modal>
        </>
    );
}
