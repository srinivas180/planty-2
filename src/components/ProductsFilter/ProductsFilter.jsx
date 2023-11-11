import { useDispatch, useSelector } from "react-redux";

import { categories } from "../../backend/db/categories";
import {
    setFilters,
    setCategory,
    resetFilters,
} from "../../slices/productsSlice";

export function ProductsFilter() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.products.filters);

    function handleChangedCategory(changedCategoryIndex) {
        dispatch(setCategory(changedCategoryIndex));
    }

    function handleRating(e) {
        dispatch(
            setFilters({ filterName: "rating", filterValue: e.target.value })
        );
    }

    function handleSortBy(e) {
        dispatch(
            setFilters({ filterName: "sortBy", filterValue: e.target.value })
        );
    }

    function handleClearFilters() {
        dispatch(resetFilters());
    }

    return (
        <div className="filters">
            <div className="filters__header">
                <h2 className="filters__title">Filters</h2>
                <button
                    className="button button--primary"
                    onClick={handleClearFilters}
                >
                    Clear Filters
                </button>
            </div>
            {/* Category Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Category</h3>
                {categories.map((category, index) => (
                    <label key={category._id} className="filters__label">
                        <input
                            className="filters__input"
                            type="checkbox"
                            value={category.categoryName}
                            checked={filters.categories[index]}
                            onChange={() => handleChangedCategory(index)}
                        />
                        {category.categoryName}
                    </label>
                ))}
            </div>

            {/* Rating Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">
                    Rating ({filters.rating} and above)
                </h3>
                <input
                    className="filters__input input__range"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={filters.rating}
                    onChange={handleRating}
                />
            </div>

            {/* Price Sort Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Sort By</h3>
                <label className="filters__label">
                    <input
                        className="filters__input"
                        type="radio"
                        value="priceLowToHigh"
                        name="rating"
                        onClick={handleSortBy}
                        checked={filters.sortBy === "priceLowToHigh"}
                    />
                    Price - Low to High
                </label>
                <label className="filters__label">
                    <input
                        className="filters__input"
                        type="radio"
                        value="priceHighToLow"
                        name="rating"
                        onClick={handleSortBy}
                        checked={filters.sortBy === "priceHighToLow"}
                    />
                    Price - High to Low
                </label>
            </div>
        </div>
    );
}
