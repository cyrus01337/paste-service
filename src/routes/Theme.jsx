import PropTypes from "prop-types";
import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";


function Theme({ theme }) {
    function onClick(event) {
        theme = theme === "light" ?
            "dark" :
            "light";

        if (theme === "light") {
            console.log("Dark mode!");
        } else {
            console.log("Light mode!");
        }
    }

    let icon;
    let properties = {
        className: "theme",
        onClick
    }

    if (theme === "light") {
        icon = <IoSunny {...properties} />;
    } else {
        icon = <IoMoon {...properties} />;
    }

    return (
        <div>
            {icon}
        </div>
    );
}


Theme.propTypes = {
    theme: PropTypes.string.isRequired
};

export default Theme;
