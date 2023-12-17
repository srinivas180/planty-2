import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { PriceDetails } from "../../components/PriceDetails/PriceDetails";

import "./Checkout.css";

export default function Checkout() {
    const cart = useSelector((state) => state.cart.cart);
    const addresses = useSelector((state) => state.address.addresses);

    const [address, setAddress] = useState(addresses[0]);

    return (
        <>
            <div className="container column checkout">
                {/* Address Options */}
                <div>
                    <h2>Select Address</h2>
                    {addresses.length === 0
                        ? "No addresses available."
                        : addresses.map((address, index) => (
                              <div className="checkout__address">
                                  <label className="address-options">
                                      <input
                                          type="radio"
                                          name="address-input"
                                          onChange={() => setAddress(address)}
                                          defaultChecked={
                                              index === 0 ? true : false
                                          }
                                      />
                                      <h4 className="checkout__address-title">
                                          {address.title}
                                      </h4>
                                  </label>
                                  <div className="address">
                                      {address.houseNo}, Ring Road, Sampath
                                      Nagar, {address.colony}
                                      <div>
                                          {address.city}, {address.state} -{" "}
                                          {address.pinCode}
                                      </div>
                                      <div>{address.country}</div>
                                  </div>
                              </div>
                          ))}
                </div>

                <div>
                    {/* Order Details */}
                    <div className="order-details w-100">
                        <h2 className="order__heading">Order Details</h2>

                        <div className="order__split">
                            <div className="order__item">
                                <p className="order__item-title">Item</p>
                                <p className="order__quantity-title">
                                    Quantity
                                </p>
                            </div>
                            {cart.map((item) => (
                                <div className="order__item">
                                    <p className="order__attribute">
                                        {item.title}
                                    </p>
                                    <p className="order__value">{item.qty}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <PriceDetails width={100} />

                    {/* Delivery to */}
                    <div className="p-20 delivery-address">
                        <h2 className="order__heading">Delivery to</h2>
                        <div className="address">
                            {addresses.length === 0 ? (
                                "No addresses available. Add an address to place order."
                            ) : (
                                <>
                                    {address.houseNo}, Ring Road, Sampath Nagar,{" "}
                                    {address.colony}
                                    <div>
                                        {address.city}, {address.state} -{" "}
                                        {address.pinCode}
                                    </div>
                                    <div>{address.country}</div>
                                </>
                            )}
                        </div>
                    </div>

                    <Link
                        className="link link--primary price__checkout"
                        to="/"
                        onClick={() => {
                            toast.success("Placed your order successfully", {
                                position: "bottom-right",
                            });
                        }}
                    >
                        Place Order
                    </Link>
                </div>
            </div>
        </>
    );
}
