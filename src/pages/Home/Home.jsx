import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { AboutPlants } from "../../components/AboutPlants/AboutPlants";
import { Categories } from "../../components/Categories/Categories";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutPlants />
            <Categories />
        </div>
    );
}
