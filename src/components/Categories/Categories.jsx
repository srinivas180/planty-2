import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "../../slices/productsSlice";

import "./Categories.css";

export function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.products.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="categories-container">
            <h2 className="categories-heading">Categories</h2>
            <div className="categories">
                {categories.slice(0, 3).map((category) => (
                    <div className="category">
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
