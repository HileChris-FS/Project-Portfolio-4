import React from "react";
import Image from "../images/weather-1.jpg";
import Location from "../component/Location";

const Homepage = () => {

    return (
        <div>
            <Location />
            <img src={Image} alt="weather" />
        </div>
    )
}
export default Homepage;