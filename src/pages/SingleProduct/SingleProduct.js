import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { FeaturedProductsList } from "../../components/FeaturedProductsList/FeaturedProductsList";
import { addToCart } from "../../slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../slices/wishlistSlice";
import "./SingleProduct.css";

export default function SingleProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const encodedToken = useSelector((state) => state.auth.encodedToken);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const { productId } = useParams();
    const products = useSelector((state) => state.products.products);
    const product = products.find((product) => product._id === productId);

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
        <>
            <div className="row--gap-32 container single-product">
                <div className="column column--gap-20 single-product__image-wrapper">
                    <img
                        className="single-product__image"
                        src={product.imageLink}
                        alt={product.altText}
                    />

                    <div className="single-product__buttons">
                        <button
                            className="single-product__button button button--primary"
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
                        <button
                            className="single-product__button button button--secondary"
                            onClick={() =>
                                isLoggedIn
                                    ? wishlistHasProduct
                                        ? handleRemoveFromWishlist(product)
                                        : handleAddToWishlist(product)
                                    : navigate("/login")
                            }
                        >
                            {wishlistHasProduct
                                ? "Unwishlist"
                                : "Add to wishlist"}
                        </button>
                    </div>
                </div>
                <div className="column column--gap-20 single-product__details">
                    <h2 className="m-0">{product.title}</h2>
                    <div className="product__ratings-and-reviews-count">
                        <div className="product__rating">
                            <span>{product.rating}</span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div>2,810 Ratings & 296 Reviews</div>
                    </div>
                    <p className=" m-0 single-product__price">
                        ₹{product.price}
                    </p>
                    <div className="m-0">
                        <span className="cart-item__property">Category: </span>
                        {product.categoryName}
                    </div>
                    <div>
                        <h3>Available offers</h3>
                        <ul className="m-0">
                            <li>
                                Special PriceGet extra 20% off (price inclusive
                                of cashback/coupon)
                            </li>
                            <li>Buy for 150 get ₹100 off your Next Buy</li>
                            <li>
                                Special PriceGet extra 20% off (price inclusive
                                of cashback/coupon)
                            </li>
                            <li>Buy for 150 get ₹100 off your Next Buy</li>
                        </ul>
                    </div>
                    <div className="single-product__description">
                        Lorem magna euismod magna ipsum et sit dolore ea
                        eleifend voluptua labore kasd lorem enim ipsum ipsum
                        amet. Lorem vero ipsum sea ea duo ea stet justo ut no
                        ut. Sed euismod laoreet consectetuer volutpat amet
                        adipiscing accusam tincidunt dolore diam et et te amet
                        nulla. Lorem magna euismod magna ipsum et sit dolore ea
                        eleifend voluptua labore kasd lorem enim ipsum ipsum
                        amet.
                    </div>
                </div>
            </div>
            <FeaturedProducts isSingleProductPage={true} />
        </>
    );
}
