import PropTypes from "prop-types";
import React from "react";
import { IoLogIn, IoLogOut } from "react-icons/io5";


function Account({ account }) {
    function onClick() {
        if (!account) {
            console.log("Login!");
        } else {
            console.log("Logout!");
        }
    }

    let icon;
    let properties = {
        className: "account",
        onClick
    }

    if (account) {
        icon =<IoLogOut {...properties} />;
    } else {
        icon = <IoLogIn {...properties} />;
    }

    return (
        <div>
            {icon}
        </div>
    );
}


Account.propTypes = {
    account: PropTypes.object
};

export default Account;
