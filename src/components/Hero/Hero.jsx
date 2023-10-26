import hero from "../../assets/images/hero-1.webp";

import "./Hero.css";

export function Hero() {
    return (
        <div className="hero">
            <img className="hero__image" src={hero} alt="" />
        </div>
    );
}
