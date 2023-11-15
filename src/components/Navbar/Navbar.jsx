import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setFilters } from "../../slices/productsSlice";

import "./Navbar.css";

export function Navbar() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const filters = useSelector((state) => state.products.filters);

    function handleSearch(e) {
        dispatch(
            setFilters({ filterName: "search", filterValue: e.target.value })
        );
    }

    return (
        <header className="header container">
            <div className="logo">
                <Link to="/" className="logo__link">
                    <h1 className="logo__name">Planty</h1>
                </Link>
            </div>
            <nav className="nav">
                <NavLink className="nav__link" to="/products">
                    Products
                </NavLink>
                <NavLink className="nav__link" to="/wishlist">
                    Wishlist
                </NavLink>
                <NavLink className="nav__link" to="/cart">
                    Cart
                </NavLink>
                {isLoggedIn ? (
                    <NavLink className="nav__link" to="/profile">
                        Profile
                    </NavLink>
                ) : (
                    <NavLink className="nav__link" to="/login">
                        Login
                    </NavLink>
                )}
            </nav>

            <div className="search">
                <label className="search__label">
                    <input
                        title="Search for products"
                        className="search__input"
                        type="search"
                        placeholder="Search for products"
                        name="search"
                        value={filters.search}
                        onChange={handleSearch}
                    />
                </label>
            </div>
        </header>
    );
}
