import React from "react";
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

const Nav = props => {
    const lat = props.lat;
    const lon = props.lon;
    const city = props.city;

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav >
             {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
            <StyledLink to="/" className={splitLocation[1] === "" ? "active" : ""}>Homepage</StyledLink>
            <StyledLink to="/current" state={{lat:{lat}, lon:{lon}, city:{city}}} className={splitLocation[1] === "current" ? "active" : "" }>Current</StyledLink>
            <StyledLink to="/sevenday" state={{lat:{lat}, lon:{lon}, city:{city}}}  className={splitLocation[1] === "sevenday" ? "active" : ""}>7 Day</StyledLink>
        </nav>
    )
}
export default Nav;

const StyledLink = styled(Link)`
    font-size: 18px;
    margin-left: 5%;
    color: #0B2027;
    &:hover {
        color: #80C3DB;
    }
    &.active {
        color: #3190AF;
    }
`