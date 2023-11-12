import { useSelector } from "react-redux";

import "./ProfileDetails.css";

export function ProfileDetails() {
    const { firstName, lastName, email } = useSelector(
        (state) => state.auth.user
    );

    return (
        <div className="column">
            <h2 className="account">Account</h2>
            <h3 className="account__sub-heading">Profile</h3>
            <div className="profile__details">
                <div>
                    <span className="profile__title">Full Name:</span>
                    <span className="profile__value">
                        {firstName} {lastName}
                    </span>
                </div>
                <div>
                    <span className="profile__title">Email:</span>
                    <span className="profile__value">{email}</span>
                </div>
            </div>
        </div>
    );
}
