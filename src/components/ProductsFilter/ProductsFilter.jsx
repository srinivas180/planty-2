import { useDispatch } from "react-redux";

import { categories } from "../../backend/db/categories";
import { setFilters } from "../../slices/productsSlice";

export function ProductsFilter() {
    const dispatch = useDispatch();

    function handleSortBy(e) {
        dispatch(setFilters(e.target.value));
    }

    return (
        <div className="filters">
            <div className="filters__header">
                <h2 className="filters__title">Filters</h2>
                <button className="button button--primary">
                    Clear Filters
                </button>
            </div>
            {/* Category Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Category</h3>
                {categories.map((category) => (
                    <label key={category._id} className="filters__label">
                        <input className="filters__input" type="checkbox" />
                        {category.categoryName}
                    </label>
                ))}
            </div>

            {/* Rating Filter */}
            <div className="filters__container">
                <h3 className="filters__heading">Rating (2 and above)</h3>
                <input
                    className="filters__input input__range"
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="1"
                    value={2}
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
                    />
                    Price - High to Low
                </label>
            </div>
        </div>
    );
}
