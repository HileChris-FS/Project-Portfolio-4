import React, { useState } from "react";

const Forecast = props => {

    async function fetchAPI(){
        console.log(props.lat)
        


        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=90b1d38fb86d7a2a22adbb11b5585174&units=imperial`)
        const data = await response.json();
        console.log(data)

    }
    fetchAPI();

    return (
        <section>

        </section>
    )
}
export default Forecast;