import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav >
            <Link to="/" className={splitLocation[1] === "homepage" ? "active" : ""}>Homepage</Link>
        </nav>
    )
}
export default Nav;