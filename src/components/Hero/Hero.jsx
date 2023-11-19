import { Link } from "react-router-dom";

import hero from "../../assets/images/hero-1.webp";

import "./Hero.css";

export function Hero() {
    return (
        <Link className="hero" to="/products">
            <img className="hero__image" src={hero} alt="" />
        </Link>
    );
}
