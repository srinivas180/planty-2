import "./Hamburger.css";

function Hamburger({ isMenuOpen, toggleMenu }) {
    return (
        <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div></div>
        </div>
    );
}

export default Hamburger;
