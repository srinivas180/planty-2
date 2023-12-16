import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { Product } from "../../components/Product/Product";
import { fetchProducts } from "../../slices/productsSlice";

import "./Products.css";
import { categories } from "../../backend/db/categories";
import { Loading } from "../../components/Loading/Loading";

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const filters = useSelector((state) => state.products.filters);
    const showAllCategories = !filters.categories.find(
        (isCategorySelected) => isCategorySelected
    );
    const loadingStatus = useSelector((state) => state.products.status);

    let filteredProducts = products;

    if (filters.search !== "") {
        filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(filters.search.toLowerCase())
        );
    }

    if (!showAllCategories) {
        filteredProducts = filters.categories.reduce(
            (filteredCategoryProducts, isCategorySelected, index) => {
                if (isCategorySelected) {
                    return [
                        ...filteredCategoryProducts,
                        ...filteredProducts.filter(
                            (product) =>
                                product.categoryName ===
                                categories[index].categoryName
                        ),
                    ];
                }

                return filteredCategoryProducts;
            },
            []
        );
    }

    filteredProducts = filteredProducts.filter(
        (product) => product.rating >= filters.rating
    );

    if (filters.sortBy === "priceLowToHigh") {
        filteredProducts = filteredProducts
            .slice()
            .sort((a, b) => a.price - b.price);
    }
    if (filters.sortBy === "priceHighToLow") {
        filteredProducts = filteredProducts
            .slice()
            .sort((a, b) => b.price - a.price);
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="row row--products container">
            <ProductsFilter />
            <div className="products">
                <h2>
                    Products (showing {filteredProducts.length} of{" "}
                    {products.length} plants)
                </h2>
                <div
                    className={`products__list ${
                        loadingStatus === "loading" ? "row--center" : ""
                    }`}
                >
                    {loadingStatus === "loading" ? (
                        <Loading size="120" />
                    ) : filteredProducts.length === 0 ? (
                        "No products available for selected filters."
                    ) : (
                        filteredProducts.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                                isWishlistItem={false}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
