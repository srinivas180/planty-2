import home from "../../assets/images/home.jpg";
import office from "../../assets/images/office.webp";
import garden from "../../assets/images/garden.jpg";

import "./Categories.css";

export function Categories() {
    return (
        <div className="categories-container">
            <h2 className="categories-heading">Categories</h2>
            <div className="categories">
                <div className="category">
                    <img className="category__image" src={home} alt="" />
                    <div className="category__text">Home</div>
                </div>
                <div className="category">
                    <img className="category__image" src={office} alt="" />
                    <div className="category__text">Office</div>
                </div>
                <div className="category">
                    <img className="category__image" src={garden} alt="" />
                    <div className="category__text">Garden</div>
                </div>
            </div>
        </div>
    );
}
