import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/Navbar/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { SpinnerFullPage } from "./components/SpinnerFullPage/SpinnerFullPage";
import "./App.css";

import Mockman from "mockman-js";

const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

function App() {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<SpinnerFullPage />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/product/:productId"
                        element={<SingleProduct />}
                    />
                    <Route
                        path="/wishlist"
                        element={
                            <ProtectedRoute>
                                <Wishlist />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <Cart />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Suspense>
            <ToastContainer />
        </div>
    );
}

export default App;
