import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
    fetchCategories,
    setCategory,
    setFilters,
} from "../../slices/productsSlice";

import "./Categories.css";

export function Categories() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector((state) => state.products.categories);

    function handleCategoryClick(clickedCategoryIndex) {
        // reset selected categories
        dispatch(setFilters({ filterName: "categories", filterValue: [] }));

        dispatch(setCategory(clickedCategoryIndex));

        navigate("/products");
    }

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="categories-container">
            <h2 className="categories-heading">Categories</h2>
            <div className="categories">
                {categories.slice(0, 3).map((category, index) => (
                    <div
                        className="category"
                        onClick={() => handleCategoryClick(index)}
                    >
                        <img
                            className="category__image"
                            src={category.imageLink}
                            alt={category.altText}
                        />
                        <div className="category__text">
                            {category.categoryName}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
