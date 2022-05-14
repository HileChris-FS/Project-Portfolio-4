import React from "react";

const Header = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.toLocaleString('default', { month: 'long' });
    const year = newDate.getFullYear();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[newDate.getDay()];
    


    return (
        <header>
            <h1>Current US Weather</h1>
            <h2>{day} {month} {date}, {year}</h2>
        </header>
    )
}
export default Header;