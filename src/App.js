import { Routes, Route } from "react-router";
import Mockman from "mockman-js";

import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";

import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
