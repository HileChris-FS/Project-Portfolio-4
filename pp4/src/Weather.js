import React, { useState } from "react";

const Weather = props => {
    const [temp, setTemp] = useState("")

    async function fetchAPI(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=94f1fb706d329c672b6cb34b838937ed&units=imperial`)
        const data = await response.json();
        setTemp(data.main.temp)
    }
        fetchAPI();

    return (
        <section>
            <h3>Today</h3>
            <p>Temperature {temp}°F</p>
        </section>
    )
}
export default Weather