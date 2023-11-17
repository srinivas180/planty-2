import { v4 as uuid } from "uuid";

import home from "../../assets/images/home.jpg";
import office from "../../assets/images/office.webp";
import garden from "../../assets/images/garden.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        _id: uuid(),
        categoryName: "Air Purifier Plants",
        imageLink: office,
        altText: "money plant",
        description:
            "This plants requires very low sunlight, low maintenance and also purifies air.",
    },
    {
        _id: uuid(),
        categoryName: "Indoor Plants",
        imageLink: home,
        altText: "aglaonema red emerald indoor plant",
        description:
            "This plants grow under low sunlight and requires less maintenance.",
    },
    {
        _id: uuid(),
        categoryName: "Outdoor Plants",
        imageLink: garden,
        altText: "adenium white double flower outdoor plant",
        description:
            "This plants grow under direct sunlight and requires you to water frequently.",
    },
    {
        _id: uuid(),
        categoryName: "Mosquito Repellent Plants",
        imageLink:
            "https://res.cloudinary.com/dt6nk7xus/image/upload/v1690003291/planty/wqa8y0c3_jerw7k.png",
        altText: "lemon balm plant",
        description: "This plants are great natural mosquito repellers.",
    },
];
