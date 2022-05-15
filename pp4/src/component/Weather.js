import React, { useEffect, useState } from "react";
import Sunny from "../images/sunny.jpg";
import Thunderstorm from "../images/thunderstorm.jpg";
import Drizzle from "../images/drizzle.jpg";
import Rain from "../images/rain.jpg";
import Snow from "../images/snow.jpg"
import Clouds from "../images/clouds.jpg"
import Clouds2 from "../images/clouds2.jpg"



const Weather = props => {
    const [temp, setTemp] = useState("");
    const [conditions, setConditions] = useState("");
    const [feelsLike, setFeelsLike] = useState("")
    var [id, setID] = useState("");
    let image;
    
    //fetch
    useEffect(() => {
        async function fetchAPI(){
            try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=5fa27a76f3e844905dbb0c506ed24496&units=imperial`)
            const data = await response.json();
            setTemp(data.main.temp);
            setConditions(data.weather[0].description);
            setID(data.weather[0].id);
            setFeelsLike(data.main.feels_like);
            }
            catch(err)  {
                console.log(err);
            }
        }
            fetchAPI();
    }, [props.lat, props.lon]);
    

    //conditions code check fo images
    if(id === 800) {
        image = Sunny;
    } else 
    if (id > 199 && id < 250) {
        image = Thunderstorm;
    } else
    if (id > 299 && id < 350) {
        image = Drizzle;
    } else 
    if (id > 499 && id < 550) {
        image = Rain;
    } else
    if (id > 599 && id < 650) {
        image = Snow;
    } else 
    if (id === 801 || id === 802) {
        image = Clouds2;
    } else {
        image = Clouds;
    }




    return (
        <section>
            <img src={image} alt="conditions" />
            <h3>Today</h3>
            <p>Temperature: {temp}°F</p>
            <p>Feels Like: {feelsLike}</p>
            <p>Conditions: {conditions}</p>
            
        </section>
    )
}
export default Weather