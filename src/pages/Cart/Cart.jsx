import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CartItem } from "../../components/CartItem/CartItem";

import "./Cart.css";

export function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const itemsPrice = cart.reduce((totalPrice, currentItem) => {
        return totalPrice + Number(currentItem.price) * currentItem.qty;
    }, 0);

    return (
        <>
            {cart.length === 0 ? (
                <div className="container cart--empty">
                    <h2>Your cart is empty</h2>
                    <Link className="explore-button" to="/products">
                        Explore products
                    </Link>
                </div>
            ) : (
                <div className="container row row--center">
                    <div className="cart">
                        <h2>Cart ({cart.length} items)</h2>
                        <div className="cart__items">
                            {cart.map((item) => (
                                <CartItem key={item._id} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className="price-details">
                        <h2 className="price-details__heading">
                            Price Details
                        </h2>

                        <div className="price-details__split">
                            <div className="price-details__item">
                                <p className="price-details__attribute">
                                    Price ({cart.length} items)
                                </p>
                                <p className="price-details__value">
                                    ₹{itemsPrice}.00
                                </p>
                            </div>
                            <div className="price-details__item">
                                <p className="price-details__attribute">
                                    Discount
                                </p>
                                <p className="price-details__value">-₹100.00</p>
                            </div>
                            <div className="price-details__item">
                                <p className="price-details__attribute">
                                    Delivery Charges
                                </p>
                                <p className="price-details__value">₹100.00</p>
                            </div>
                        </div>

                        <div className="total-price price-details__item">
                            <p className="total-price__attribute">
                                Total Amount
                            </p>
                            <p className="total-price__value">
                                ₹{itemsPrice}.00
                            </p>
                        </div>

                        <p className="price-details__savings">
                            You will save ₹100.00 on this order
                        </p>

                        <button className="button button--primary price-details__checkout">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
