import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../slices/addressSlice";
import "./Address.css";

export function Address({ toggleAddressForm, setAddress, setIsEditAddress }) {
    const dispatch = useDispatch();
    const addresses = useSelector((state) => state.address.addresses);

    function handleAddAddress() {
        toggleAddressForm();
        setIsEditAddress(false);
    }

    function handleEditAddress(address) {
        toggleAddressForm();
        setIsEditAddress(true);
        setAddress(address);
    }

    function handleRemoveAddress(addressId) {
        dispatch(removeAddress(addressId));
    }

    return (
        <>
            <div className="row row--space-between address__title">
                <h3 className="account__sub-heading">Address</h3>
                <button
                    className="add-address button button--primary"
                    onClick={handleAddAddress}
                >
                    Add Address
                </button>
            </div>

            {addresses.length === 0 ? (
                <>
                    <p>No addresses available to show.</p>
                    <p>Click on 'add address' to add new address.</p>
                </>
            ) : (
                <>
                    {addresses.map((address) => (
                        <div className="address">
                            <h4 className="address__subheading">
                                {address.title}
                            </h4>
                            <div>
                                {address.houseNo}, Ring Road, Sampath Nagar
                            </div>
                            <div>{address.colony}</div>
                            <div>
                                {address.city}, {address.state} -{" "}
                                {address.pinCode}
                            </div>
                            <div>{address.country}</div>
                            <div className="address__buttons">
                                <button
                                    className="button button--secondary address__button"
                                    onClick={() => handleEditAddress(address)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="button button--secondary address__button"
                                    onClick={() =>
                                        handleRemoveAddress(address._id)
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}

            <button className="button button--primary logout">Logout</button>
        </>
    );
}
