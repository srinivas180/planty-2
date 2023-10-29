import plant1 from "../../assets/images/plant-1.jpg";
import plant2 from "../../assets/images/plant-2.jpg";
import plant3 from "../../assets/images/plant-3.jpg";
import plant4 from "../../assets/images/plant-4.jpg";
import plant5 from "../../assets/images/plant-5.webp";
import plant6 from "../../assets/images/plant-6.jpg";

import "./FeaturedProducts.css";

const featuredProducts = [
    {
        name: "Cactus",
        img: plant1,
        price: 550,
    },
    {
        name: "Aloe Vera",
        img: plant2,
        price: 300,
    },
    {
        name: "Humectant",
        img: plant3,
        price: 410,
    },
    {
        name: "Boxwood",
        img: plant4,
        price: 220,
    },
    {
        name: "Monstera Deliciosa",
        img: plant5,
        price: 600,
    },
    {
        name: "Boncellensis Secullant",
        img: plant6,
        price: 1000,
    },
];

export function FeaturedProducts() {
    return (
        <div className="featured-products-container">
            <div>
                <span className="featured-products__caption">
                    THE MOST TRENDY
                </span>
                <h2 className="featured-products__title">Featured Products</h2>
            </div>
            <div className="featured-products">
                {featuredProducts.map((featuredProduct) => (
                    <div className="featured-product">
                        <img
                            className="featured-product__image"
                            src={featuredProduct.img}
                            alt=""
                        />
                        <h3 className="featured-product__title">
                            {featuredProduct.name}
                        </h3>
                        <span className="featured-product__price">
                            Rs. {featuredProduct.price}.00
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
