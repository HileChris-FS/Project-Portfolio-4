import React from "react";
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

const Nav = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav >
            <StyledLink to="/" className={splitLocation[1] === "homepage" ? "active" : ""}>Your Location</StyledLink>
        </nav>
    )
}
export default Nav;

const StyledLink = styled(Link)`
    font-size: 18px;
    margin-left: 5%;
    color: #0B2027;
    &:hover {
        color: #3190AF;
    }
`