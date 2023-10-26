import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { AboutPlants } from "../../components/AboutPlants/AboutPlants";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutPlants />
        </div>
    );
}
