import "./Navbar.css";

export function Navbar() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <h1 className="title">Planty</h1>
                </div>

                <div className="right">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">Products</li>
                            <li className="nav__item">Wishlist</li>
                            <li className="nav__item">Cart</li>
                        </ul>
                    </nav>

                    <ul className="options">
                        <li className="options__item">Search</li>
                        <li className="options__item">Login</li>
                        <li className="options__item">Sign Up</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
