import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/login" />;
}
