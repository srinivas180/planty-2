import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Hamburger from "../Hamburger/Hamburger";
import { setFilters } from "../../slices/productsSlice";

import "./Navbar.css";

export function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const filters = useSelector((state) => state.products.filters);

    function handleSearch(e) {
        dispatch(
            setFilters({ filterName: "search", filterValue: e.target.value })
        );

        navigate("/products");
    }

    function toggleMenu() {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    }

    return (
        <header className={`container header ${isMenuOpen ? "active" : ""}`}>
            <div className="logo">
                <Link to="/" className="logo__link">
                    <h1 className="logo__name">Planty</h1>
                </Link>
            </div>
            <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
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
                        title="Search for products by product names"
                        className="search__input"
                        type="search"
                        placeholder="Search for products by product name"
                        name="search"
                        value={filters.search}
                        onChange={handleSearch}
                    />
                </label>
            </div>
        </header>
    );
}
