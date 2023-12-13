import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import { removeFromCart, productQuantityHandler } from "../../slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../slices/wishlistSlice";

import "./CartItem.css";

const QUANTITY_UPDATE_DEBOUNCE_DELAY = 400;

export function CartItem({ item }) {
    const dispatch = useDispatch();
    const encodedToken = useSelector((state) => state.auth.encodedToken);

    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const wishlistHasProduct = wishlist.find((w) => w._id === item._id);

    function handleRemoveFromCart(productId) {
        dispatch(removeFromCart({ encodedToken, productId }));
    }

    const handleQuantity = debounce((productId, type) => {
        dispatch(productQuantityHandler({ productId, type, encodedToken }));
    }, QUANTITY_UPDATE_DEBOUNCE_DELAY);

    function handleAddToWishlist(encodedToken, item) {
        dispatch(addToWishlist({ encodedToken, product: item }));
    }

    function handleRemoveFromWishlist(encodedToken, item) {
        dispatch(
            removeFromWishlist({
                encodedToken,
                productId: item._id,
            })
        );
    }

    return (
        <div className="cart-item">
            <img
                className="cart-item__image"
                src={item.imageLink}
                alt={item.altText}
            />
            <div className="cart-item__details">
                <h2 className="cart-item__heading">{item.title}</h2>
                <p className="cart-item__price">₹{item.price}</p>
                <div className="cart-item__category">
                    <span className="cart-item__property">Category: </span>
                    {item.categoryName}
                </div>
                <div className="quantity">
                    <span className="cart-item__property">Quantity: </span>
                    <button
                        className="quantity__button button  button--secondary"
                        disabled={item.qty === 1}
                        onClick={() => handleQuantity(item._id, "decrement")}
                    >
                        -
                    </button>
                    <span className="quantity__number">{item.qty}</span>
                    <button
                        className="quantity__button button  button--secondary"
                        onClick={() => handleQuantity(item._id, "increment")}
                    >
                        +
                    </button>
                </div>
                <div className="cart-item__buttons">
                    <button
                        className="cart-item__button button  button--secondary"
                        onClick={() => handleRemoveFromCart(item._id)}
                    >
                        Remove Item
                    </button>
                    <button
                        className="cart-item__button button  button--secondary"
                        onClick={() =>
                            wishlistHasProduct
                                ? handleRemoveFromWishlist(encodedToken, item)
                                : handleAddToWishlist(encodedToken, item)
                        }
                    >
                        {wishlistHasProduct ? "Unwishlist" : "Add to wishlist"}
                    </button>
                </div>
            </div>
        </div>
    );
}
