import { v4 as uuid } from "uuid";

import philodendronHeartleaf from "../../assets/images/Bloomscape-Philodendron-Heartleaf.webp";
import castIronPlant from "../../assets/images/cast-iron-plant.webp";
import goldenPothos from "../../assets/images/golden-pothos.webp";
import monsteraDeliciosa from "../../assets/images/lon--george-monstera-deliciosa.webp";
import luckyBamboo from "../../assets/images/lucky-bamboo.webp";
import snakePlant from "../../assets/images/snake-plant.webp";
import zzPlant from "../../assets/images/zz-plant.webp";
import butterflyBush from "../../assets/images/butterfly_bush_outdoor.jpg";
import sedum from "../../assets/images/sedum_outdoor.jpg";
import daylily from "../../assets/images/daylily_outdoor.jpg";
import carmint from "../../assets/images/carmint_outdoor.jpg";
import daffodils from "../../assets/images/daffodils_outdoor.jpg";
import weepingFig from "../../assets/images/weeping_fig_air_purifier.jpg";
import purpleSpiderwort from "../../assets/images/purple_spiderwort_air_purifier.jpg";
import waxPlant from "../../assets/images/wax_plant_air_purifier.jpg";
import purpleWaffle from "../../assets/images/purple_waffle_plant_air_purifier.jpg";
import beeBalm from "../../assets/images/bee_balm_mosquito_repellent.jpg";
import scentedGeranium from "../../assets/images/scented_geranium_mosquito_repellent.jpg";
import eucalyptus from "../../assets/images/eucalyptus_mosquito_repellent.jpg";
import lantana from "../../assets/images/lantana_mosquito_repellent.jpg";
import mint from "../../assets/images/mint_mosquito_repellent.jpg";
import americanBeautyberry from "../../assets/images/american_beautyberry_mosquito_repellent.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        title: "Philodendron Heartleaf",
        imageLink: philodendronHeartleaf,
        price: "300",
        rating: 4.8,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "Cast Iron Plant",
        imageLink: castIronPlant,
        price: "320",
        rating: 4.1,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "Golden Pothos",
        imageLink: goldenPothos,
        price: "200",
        rating: 4.5,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "Monstera Deliciosa",
        imageLink: monsteraDeliciosa,
        price: "250",
        rating: 4.3,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "Lucky Bamboo",
        imageLink: luckyBamboo,
        price: "300",
        rating: 3.6,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "Snake Plant",
        imageLink: snakePlant,
        price: "500",
        rating: 3.8,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "ZZ Plant",
        imageLink: zzPlant,
        price: "400",
        rating: 4.9,
        categoryName: "Indoor Plants",
    },
    {
        _id: uuid(),
        title: "Butterfly Bush",
        imageLink: butterflyBush,
        price: "500",
        rating: 3.5,
        categoryName: "Outdoor Plants",
    },
    {
        _id: uuid(),
        title: "Sedum",
        imageLink: sedum,
        price: "420",
        rating: 4.6,
        categoryName: "Outdoor Plants",
    },
    {
        _id: uuid(),
        title: "Daylily",
        imageLink: daylily,
        price: "260",
        rating: 2.5,
        categoryName: "Outdoor Plants",
    },
    {
        _id: uuid(),
        title: "Carmint",
        imageLink: carmint,
        price: "450",
        rating: 2.9,
        categoryName: "Outdoor Plants",
    },
    {
        _id: uuid(),
        title: "Daffodils",
        imageLink: daffodils,
        price: "600",
        rating: 5.0,
        categoryName: "Outdoor Plants",
    },
    {
        _id: uuid(),
        title: "Weeping Fig",
        imageLink: weepingFig,
        price: "310",
        rating: 4.8,
        categoryName: "Air Purifier Plants",
    },
    {
        _id: uuid(),
        title: "Purple Spiderwort",
        imageLink: purpleSpiderwort,
        price: "400",
        rating: 4.2,
        categoryName: "Air Purifier Plants",
    },
    {
        _id: uuid(),
        title: "Wax Plant",
        imageLink: waxPlant,
        price: "500",
        rating: 2.1,
        categoryName: "Air Purifier Plants",
    },
    {
        _id: uuid(),
        title: "Purple Waffle",
        imageLink: purpleWaffle,
        price: "400",
        rating: 4.9,
        categoryName: "Air Purifier Plants",
    },
    {
        _id: uuid(),
        title: "Bee Balm",
        imageLink: beeBalm,
        price: "450",
        rating: 3.4,
        categoryName: "Mosquito Repellent Plants",
    },
    {
        _id: uuid(),
        title: "Scented Geranium",
        imageLink: scentedGeranium,
        price: "600",
        rating: 5.0,
        categoryName: "Mosquito Repellent Plants",
    },
    {
        _id: uuid(),
        title: "Eucalyptus",
        imageLink: eucalyptus,
        price: "310",
        rating: 4.8,
        categoryName: "Mosquito Repellent Plants",
    },
    {
        _id: uuid(),
        title: "Lantana",
        imageLink: lantana,
        price: "400",
        rating: 4.2,
        categoryName: "Mosquito Repellent Plants",
    },
    {
        _id: uuid(),
        title: "Mint",
        imageLink: mint,
        price: "500",
        rating: 2.1,
        categoryName: "Mosquito Repellent Plants",
    },
    {
        _id: uuid(),
        title: "American Beautyberry",
        imageLink: americanBeautyberry,
        price: "400",
        rating: 4.9,
        categoryName: "Mosquito Repellent Plants",
    },
];
