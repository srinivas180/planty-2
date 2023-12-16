import { Hero } from "../../components/Hero/Hero";
import { AboutPlants } from "../../components/AboutPlants/AboutPlants";
import { Categories } from "../../components/Categories/Categories";
import { Offers } from "../../components/Offers/Offers";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutPlants />
            <Offers />
            <Categories />
            <FeaturedProducts />
        </div>
    );
}
