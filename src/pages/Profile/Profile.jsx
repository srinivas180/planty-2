import { useState } from "react";

import { ProfileDetails } from "../../components/ProfileDetails/ProfileDetails";
import { Address } from "../../components/Address/Address";
import { AddressForm } from "../../components/AddressForm/AddressForm";
import { Modal } from "../../components/Modal/Modal";
import "./Profile.css";

export function Profile() {
    const [showAddressForm, setShowAddressForm] = useState(false);

    function toggleAddressForm() {
        setShowAddressForm(!showAddressForm);
    }

    return (
        <>
            <div className="container column profile">
                <ProfileDetails />
                <Address toggleAddressForm={toggleAddressForm} />
            </div>
            <Modal show={showAddressForm}>
                <AddressForm toggleAddressForm={toggleAddressForm} />
            </Modal>
        </>
    );
}
