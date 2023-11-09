import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../../slices/cartSlice";

import "./Product.css";

export function Product({ product, isWishlistItem }) {
    const dispatch = useDispatch();
    const encodedToken = useSelector((state) => state.auth.encodedToken);
    const cart = useSelector((state) => state.cart.cart);
    const cartHasProduct = cart.find((p) => p._id === product._id);

    function handleAddToCart(product) {
        dispatch(addToCart({ encodedToken, product }));
    }

    function handleRemoveFromCart(productId) {
        dispatch(removeFromCart({ encodedToken, productId }));
    }

    return (
        <div className="product">
            <Link to={`/product/${product._id}`}>
                <img
                    className="product__image"
                    src={product.imageLink}
                    alt=""
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
                <button className=" button button--secondary product__button">
                    Add to wishlist
                </button>
                <button
                    className=" button button--primary product__button"
                    onClick={
                        cartHasProduct
                            ? () => handleRemoveFromCart(product._id)
                            : () => handleAddToCart(product)
                    }
                >
                    {cartHasProduct ? "Remove from Cart" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}
