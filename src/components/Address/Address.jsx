import "./Address.css";

export function Address({ toggleAddressForm }) {
    const addresses = [
        {
            _id: 2,
            title: "Home",
            houseNo: "4534",
            colony: "MG Colony",
            city: "Pune",
            state: "Maharashtra",
            country: "India",
            pinCode: "543234",
        },
    ];

    return (
        <>
            <div className="row row--space-between address__title">
                <h3 className="account__sub-heading">Address</h3>
                <button
                    className="add-address button button--primary"
                    onClick={toggleAddressForm}
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
                                <button className="button button--secondary address__button">
                                    Edit
                                </button>
                                <button className="button button--secondary address__button">
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
