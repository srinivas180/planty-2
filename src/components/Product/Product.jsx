import { Link } from "react-router-dom";

import "./Product.css";

export function Product({ product, isWishlistItem }) {
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
                <button className=" button button--primary product__button">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
