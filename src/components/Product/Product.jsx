import { Link } from "react-router-dom";

import "./Product.css";

export function Product({ product }) {
    return (
        <div className="product">
            <Link to={`/product/${product._id}`}>
                <img
                    className="product__image"
                    src={product.imageLink}
                    alt=""
                />
            </Link>
            <div className="product__details">
                <div className="product__header">
                    <div className="product__rating">
                        <span>{product.rating}</span>
                        <span className="fa fa-star"></span>
                    </div>
                    <h3 className="product__title">{product.title}</h3>
                </div>

                <span className="product__price">₹{product.price}</span>
            </div>
            <div className="product__buttons">
                <button className="product__button">"Add to wishlist"</button>
                <button className="product__button">"Add to cart"</button>
            </div>
        </div>
    );
}
