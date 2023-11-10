import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { Product } from "../../components/Product/Product";
import { fetchProducts } from "../../slices/productsSlice";

import "./Products.css";

export function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const filters = useSelector((state) => state.products.filters);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    let filteredProducts = products;

    if (filters.sortBy === "priceLowToHigh") {
        filteredProducts = products.slice().sort((a, b) => a.price - b.price);
    }
    if (filters.sortBy === "priceHighToLow") {
        filteredProducts = products.slice().sort((a, b) => b.price - a.price);
    }

    return (
        <div className="row row--products container">
            <ProductsFilter />
            <div className="products">
                <h2>Products (showing 10 of 50 plants)</h2>
                <div className="products__list">
                    {filteredProducts.map((product) => (
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
