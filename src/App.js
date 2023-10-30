import { Routes, Route } from "react-router";
import Mockman from "mockman-js";

import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
}

export default App;
