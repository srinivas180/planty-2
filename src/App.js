import { Routes, Route } from "react-router";
import Mockman from "mockman-js";

import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { Profile } from "./pages/Profile/Profile";
import { Checkout } from "./pages/Checkout/Checkout";

import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:productId" element={<SingleProduct />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    );
}

export default App;
