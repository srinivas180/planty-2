import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { AboutPlants } from "../../components/AboutPlants/AboutPlants";
import { Categories } from "../../components/Categories/Categories";
import { Offers } from "../../components/Offers/Offers";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutPlants />
            <Offers />
            <Categories />
        </div>
    );
}
