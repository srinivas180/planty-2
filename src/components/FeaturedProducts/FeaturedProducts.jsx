import { FeaturedProductsList } from "../FeaturedProductsList/FeaturedProductsList";

import "./FeaturedProducts.css";

export function FeaturedProducts({ isSingleProductPage }) {
    return (
        <div className="featured-products-container">
            {!isSingleProductPage && (
                <span className="featured-products__caption">
                    THE MOST TRENDY
                </span>
            )}
            <h2 className="featured-products__title">Featured Products</h2>
            <FeaturedProductsList />
        </div>
    );
}
