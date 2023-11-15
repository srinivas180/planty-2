import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

export function Navbar() {
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
                <NavLink className="nav__link">Wishlist</NavLink>
                <NavLink className="nav__link">Cart</NavLink>
                {false ? (
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
                    />
                </label>
            </div>
        </header>
    );
}
