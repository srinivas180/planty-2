import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Product } from "../../components/Product/Product";

import "./Wishlist.css";

export function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist.wishlist);

    return (
        <>
            {wishlist.length === 0 ? (
                <div className="container cart--empty">
                    <h2>Your wishlist is empty</h2>
                    <Link className="explore-button" to="/products">
                        Explore products
                    </Link>
                </div>
            ) : (
                <div className="wishlist container">
                    <h2>Wishlist ({wishlist.length} items)</h2>
                    <div className="wishlist__items">
                        {wishlist.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                                isWishlistItem
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
