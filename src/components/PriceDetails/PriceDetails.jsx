import { useSelector } from "react-redux";

export function PriceDetails({ width, children }) {
    const cart = useSelector((state) => state.cart.cart);
    const itemsPrice = cart.reduce((totalPrice, currentItem) => {
        return totalPrice + Number(currentItem.price) * currentItem.qty;
    }, 0);

    return (
        <div className="price-details" style={{ width: `${width}%` }}>
            <h2 className="price-details__heading">Price Details</h2>

            <div className="price-details__split">
                <div className="price-details__item">
                    <p className="price-details__attribute">
                        Price ({cart.length} items)
                    </p>
                    <p className="price-details__value">₹{itemsPrice}.00</p>
                </div>
                <div className="price-details__item">
                    <p className="price-details__attribute">Discount</p>
                    <p className="price-details__value">-₹100.00</p>
                </div>
                <div className="price-details__item">
                    <p className="price-details__attribute">Delivery Charges</p>
                    <p className="price-details__value">₹100.00</p>
                </div>
            </div>

            <div className="total-price price-details__item">
                <p className="total-price__attribute">Total Amount</p>
                <p className="total-price__value">₹{itemsPrice}.00</p>
            </div>

            <p className="price-details__savings">
                You will save ₹100.00 on this order
            </p>

            {children}
        </div>
    );
}
