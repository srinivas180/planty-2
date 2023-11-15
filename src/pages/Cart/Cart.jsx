import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CartItem } from "../../components/CartItem/CartItem";
import { PriceDetails } from "../../components/PriceDetails/PriceDetails";

import "./Cart.css";

export function Cart() {
    const cart = useSelector((state) => state.cart.cart);

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

                    <PriceDetails>
                        <Link
                            to="/checkout"
                            className="link link--primary price-details__checkout"
                        >
                            Checkout
                        </Link>
                    </PriceDetails>
                </div>
            )}
        </>
    );
}
