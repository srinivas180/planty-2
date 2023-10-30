import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { Product } from "../../components/Product/Product";

import { products } from "../../backend/db/products";

import "./Products.css";

export function Products() {
    return (
        <div className="row row--products container">
            <ProductsFilter />
            <div className="products">
                <h2>Products (showing 10 of 50 plants)</h2>
                <div className="products__list">
                    {products.map((product) => (
                        <Product
                            key={product._id}
                            product={product}
                            isWishlistItem={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
