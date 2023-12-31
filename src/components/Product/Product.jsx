import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { addToCart } from "../../slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../slices/wishlistSlice";

import "./Product.css";

export function Product({ product, isWishlistItem }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const encodedToken = useSelector((state) => state.auth.encodedToken);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const cart = useSelector((state) => state.cart.cart);
    const cartHasProduct = cart.find((p) => p._id === product._id);

    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const wishlistHasProduct = wishlist.find((w) => w._id === product._id);

    function handleAddToCart(product) {
        dispatch(addToCart({ encodedToken, product }));
    }

    function handleAddToWishlist(product) {
        dispatch(addToWishlist({ encodedToken, product }));
    }

    function handleRemoveFromWishlist(product) {
        dispatch(removeFromWishlist({ encodedToken, productId: product._id }));
    }

    return (
        <div className="product">
            <Link to={`/product/${product._id}`}>
                <img
                    className="product__image"
                    src={product.imageLink}
                    alt={product.title}
                />
            </Link>
            {!isWishlistItem ? (
                <div className="product__details">
                    <div className="product__rating">
                        <span>{product.rating}</span>
                        <span className="fa fa-star"></span>
                    </div>
                    <h3 className="product__title">{product.title}</h3>
                    <span className="product__price">₹{product.price}</span>
                </div>
            ) : (
                <h3 className="product__title">{product.title}</h3>
            )}
            <div className="product__buttons">
                <button
                    className=" button button--secondary product__button"
                    onClick={() =>
                        isLoggedIn
                            ? wishlistHasProduct
                                ? handleRemoveFromWishlist(product)
                                : handleAddToWishlist(product)
                            : navigate("/login")
                    }
                >
                    {wishlistHasProduct ? "Unwishlist" : "Add to wishlist"}
                </button>
                <button
                    className=" button button--primary product__button"
                    onClick={() =>
                        isLoggedIn
                            ? cartHasProduct
                                ? navigate("/cart")
                                : handleAddToCart(product)
                            : navigate("/login")
                    }
                >
                    {cartHasProduct ? "Go to cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}
