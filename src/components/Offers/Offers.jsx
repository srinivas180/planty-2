import discount from "../../assets/images/discount.webp";
import deal from "../../assets/images/deal.webp";

import "./Offers.css";

export function Offers() {
    return (
        <div className="offers">
            <img className="offers__discount" src={discount} alt="" />
            <img className="offers__deal" src={deal} alt="" />
        </div>
    );
}
