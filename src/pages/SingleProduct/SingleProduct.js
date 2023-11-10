import { useSelector } from "react-redux";
import { useParams } from "react-router";

import "./SingleProduct.css";

export function SingleProduct() {
    const { productId } = useParams();
    const products = useSelector((state) => state.products.products);

    const product = products.find((product) => product._id === productId);

    return (
        <div className="row row--gap-32 row--align-start container single-product">
            <div className="column column--gap-20 single-product__image-wrapper">
                <img
                    className="single-product__image"
                    src={product.imageLink}
                    alt={product.altText}
                />

                <div className="single-product__buttons">
                    <button className="single-product__button button button--secondary">
                        Add to cart
                    </button>
                    <button className="single-product__button button button--secondary">
                        Add to wishlist
                    </button>
                </div>
            </div>
            <div className="column column--gap-20 single-product__details">
                <h2 className="m-0">{product.title}</h2>
                <p className="m-0">(4.5 S) 2,810 Ratings & 296 Reviews</p>
                <p className=" m-0 single-product__price">₹{product.price}</p>
                <div className="m-0">
                    <span className="cart-item__property">Category: </span>
                    {product.categoryName}
                </div>
                <div>
                    <h3>Available offers</h3>
                    <ul className="m-0">
                        <li>
                            Special PriceGet extra 20% off (price inclusive of
                            cashback/coupon)
                        </li>
                        <li>Buy for 150 get ₹100 off your Next Buy</li>
                        <li>
                            Special PriceGet extra 20% off (price inclusive of
                            cashback/coupon)
                        </li>
                        <li>Buy for 150 get ₹100 off your Next Buy</li>
                    </ul>
                </div>
                <div className="single-product__description">
                    Lorem magna euismod magna ipsum et sit dolore ea eleifend
                    voluptua labore kasd lorem enim ipsum ipsum amet. Lorem vero
                    ipsum sea ea duo ea stet justo ut no ut. Sed euismod laoreet
                    consectetuer volutpat amet adipiscing accusam tincidunt
                    dolore diam et et te amet nulla. Lorem magna euismod magna
                    ipsum et sit dolore ea eleifend voluptua labore kasd lorem
                    enim ipsum ipsum amet.
                </div>
            </div>
        </div>
    );
}
