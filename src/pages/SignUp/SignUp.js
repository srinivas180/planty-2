import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import { EyeIcon } from "../../components/EyeIcon/EyeIcon";
import { ClosedEyeIcon } from "../../components/ClosedEyeIcon/ClosedEyeIcon";

import { signup } from "../../slices/authSlice";

export function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [showPassword, setShowPassword] = useState();
    const [showConfirmPassword, setShowConfirmPassword] = useState();

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    function handleInputChange(e) {
        setUserDetails((userDetails) => ({
            ...userDetails,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSignUp(e) {
        e.preventDefault();
        dispatch(signup(userDetails));
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    function toggleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn]);

    return (
        <div className="container column column--center">
            <form className="form column" onSubmit={handleSignUp}>
                <h2 className="form__heading">Sign Up</h2>
                <input
                    className="form__input"
                    required
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                />
                <input
                    className="form__input"
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={userDetails.lastName}
                    onChange={handleInputChange}
                />
                <input
                    className="form__input"
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                />
                <div className="password-container">
                    <input
                        className="form__input"
                        name="password"
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={userDetails.password}
                        onChange={handleInputChange}
                    />

                    {showPassword ? (
                        <ClosedEyeIcon
                            toggleShowPassword={toggleShowPassword}
                        />
                    ) : (
                        <EyeIcon toggleShowPassword={toggleShowPassword} />
                    )}
                </div>
                <div className="password-container">
                    <input
                        name="confirm-password"
                        className="form__input"
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                    />

                    {showConfirmPassword ? (
                        <ClosedEyeIcon
                            toggleShowPassword={toggleShowConfirmPassword}
                        />
                    ) : (
                        <EyeIcon
                            toggleShowPassword={toggleShowConfirmPassword}
                        />
                    )}
                </div>
                <button
                    className="button button--primary form__submit"
                    type="submit"
                >
                    Create New Account
                </button>
            </form>
            <div className="row row--gap-8">
                Already have account?
                <NavLink className="form__navlink" to="/login">
                    Login
                </NavLink>
            </div>
        </div>
    );
}
