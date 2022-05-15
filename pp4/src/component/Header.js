import React from "react";

const Header = () => {
    const newDate = new Date();

    return (
        <header>

            <h1>Current US Weather</h1>
            <h2>{newDate.toDateString()}</h2>

        </header>
    )
}
export default Header;