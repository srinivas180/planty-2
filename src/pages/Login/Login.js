import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../slices/authSlice";

export function Login() {
    const dispatch = useDispatch();
    const [userCreds, setUserCreds] = useState({ email: "", password: "" });

    function handleInputChange(e) {
        setUserCreds((userCreds) => ({
            ...userCreds,
            [e.target.name]: e.target.value,
        }));
    }

    function handleLogin(e, userCreds) {
        e.preventDefault();
        dispatch(login(userCreds));
    }

    return (
        <div className="container column column--center">
            <form
                className="form column"
                onSubmit={(e) => handleLogin(e, userCreds)}
            >
                <h2 className="form__heading">Login</h2>

                <input
                    className="form__input"
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={userCreds.email}
                    onChange={handleInputChange}
                />

                <div className="password-container">
                    <input
                        className="form__input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={userCreds.password}
                        onChange={handleInputChange}
                    />
                    {/* TODO: change false to showPassword */}
                    {false ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="password__eye-icon"
                        >
                            <g id="style=stroke">
                                <g id="eye-close">
                                    <path
                                        id="vector (Stroke)"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.2827 9.27342C4.69287 5.94267 8.19606 3.96997 12 3.96997C13.3515 3.96997 14.6695 4.21968 15.9154 4.69366C16.3026 4.84093 16.497 5.27417 16.3497 5.66131C16.2025 6.04846 15.7692 6.24292 15.3821 6.09564C14.3024 5.68491 13.1649 5.46997 12 5.46997C8.74406 5.46997 5.66741 7.15436 3.49759 10.1532L3.49687 10.1542C3.15894 10.6197 2.96497 11.2866 2.96497 11.995C2.96497 12.7033 3.15894 13.3703 3.49687 13.8357L3.49759 13.8367C3.92863 14.4325 4.3957 14.9764 4.89269 15.4654C5.18793 15.7559 5.19175 16.2308 4.90122 16.526C4.61069 16.8213 4.13584 16.8251 3.8406 16.5346C3.28219 15.9851 2.76085 15.3774 2.28234 14.716C1.72077 13.942 1.46497 12.9478 1.46497 11.995C1.46497 11.0419 1.72088 10.0475 2.2827 9.27342ZM18.7729 7.18838C19.0534 6.88361 19.5279 6.86393 19.8327 7.14444C20.5154 7.77278 21.1469 8.48525 21.7176 9.27392C22.2792 10.0479 22.535 11.0421 22.535 11.995C22.535 12.948 22.279 13.9424 21.7172 14.7165C19.3071 18.0473 15.8039 20.02 12 20.02C10.5114 20.02 9.06377 19.717 7.70845 19.1455C7.32679 18.9846 7.14786 18.5447 7.30881 18.163C7.46976 17.7813 7.90964 17.6024 8.2913 17.7634C9.46746 18.2594 10.7172 18.52 12 18.52C15.2559 18.52 18.3325 16.8356 20.5023 13.8367L20.5031 13.8357C20.841 13.3703 21.035 12.7033 21.035 11.995C21.035 11.2866 20.841 10.6197 20.5031 10.1542L20.5023 10.1532C19.9883 9.44277 19.423 8.80602 18.8169 8.24813C18.5121 7.96762 18.4924 7.49316 18.7729 7.18838Z"
                                        fill="#000000"
                                    />
                                    <path
                                        id="vector (Stroke)_2"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 9.75C10.755 9.75 9.75 10.755 9.75 12C9.75 12.5484 9.94405 13.0481 10.2674 13.4375C10.532 13.7562 10.4881 14.229 10.1694 14.4936C9.85076 14.7582 9.37792 14.7144 9.11332 14.3957C8.57407 13.7462 8.25 12.9102 8.25 12C8.25 9.92657 9.92657 8.25 12 8.25C13.0215 8.25 13.9486 8.658 14.6243 9.31951C14.9203 9.60929 14.9253 10.0841 14.6355 10.3801C14.3457 10.6761 13.8709 10.6811 13.5749 10.3913C13.1691 9.99399 12.6147 9.75 12 9.75ZM15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 14.0734 14.0734 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25C13.245 14.25 14.25 13.245 14.25 12C14.25 11.5858 14.5858 11.25 15 11.25Z"
                                        fill="#000000"
                                    />
                                    <path
                                        id="vector (Stroke)_3"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5533 2.19366C22.8329 2.49926 22.8119 2.97366 22.5063 3.25328L2.5063 21.5533C2.2007 21.8329 1.7263 21.8118 1.44668 21.5062C1.16706 21.2006 1.18812 20.7262 1.49371 20.4466L21.4937 2.14663C21.7993 1.86701 22.2737 1.88807 22.5533 2.19366Z"
                                        fill="#000000"
                                    />
                                </g>
                            </g>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="password__eye-icon"
                        >
                            <path
                                d="M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5Z"
                                stroke="#000000"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="#000000"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    )}
                </div>

                <div className="row row--space-between">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <NavLink className="form__navlink navlink--no-underline">
                        Forgot password
                    </NavLink>
                </div>
                <button
                    className="button button--primary form__submit"
                    type="submit"
                >
                    Login
                </button>
                <button
                    onClick={(e) =>
                        handleLogin(e, {
                            email: "satyachandra@proton.me",
                            password: "satyachandra",
                        })
                    }
                    className="button button--text form__guest-login-button"
                >
                    Login as Guest
                </button>
            </form>
            <div className="row row--gap-8">
                Don't have account?
                <NavLink className="form__navlink" to="/signup">
                    Signup
                </NavLink>
            </div>
        </div>
    );
}
