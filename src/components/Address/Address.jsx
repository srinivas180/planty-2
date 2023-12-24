import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { removeAddress } from "../../slices/addressSlice";
import { logout } from "../../slices/authSlice";
import { resetFilters } from "../../slices/productsSlice";
import { resetCart } from "../../slices/cartSlice";
import { resetWishlist } from "../../slices/wishlistSlice";
import "./Address.css";

export function Address({ toggleAddressForm, setAddress, setIsEditAddress }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    function handleLogout() {
        dispatch(logout());
        dispatch(resetFilters());
        dispatch(resetCart());
        dispatch(resetWishlist());
        toast.success("successfully logged out.", {
            position: "bottom-right",
        });
        navigate("/");
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
                        <div className="address" key={address._id}>
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

            <button
                className="button button--primary logout"
                onClick={handleLogout}
            >
                Logout
            </button>
        </>
    );
}
