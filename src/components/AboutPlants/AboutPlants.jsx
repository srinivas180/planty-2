import potPlants from "../../assets/images/pot-plants.webp";

import "./AboutPlants.css";

export function AboutPlants() {
    return (
        <div className="about">
            <div className="about__content">
                <h2 className="about__heading">
                    Plants Make People Happy. Come with us grow up your plant.
                </h2>
                <p className="about__paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam ipsam ullam incidunt itaque nemo omnis temporibus
                    totam quibusdam repellat vero, recusandae excepturi
                    dignissimos velit et alias amet, quia facilis perferendis.
                </p>
            </div>
            <img className="about__image" src={potPlants} alt="" />
        </div>
    );
}
