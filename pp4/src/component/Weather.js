import React, { useEffect, useState } from "react";
import Sunny from "../images/sunny.jpg";
import Thunderstorm from "../images/thunderstorm.jpg";
import Drizzle from "../images/drizzle.jpg";
import Rain from "../images/rain.jpg";
import Snow from "../images/snow.jpg";
import Clouds from "../images/clouds.jpg";
import Clouds2 from "../images/clouds2.jpg";





const Weather = props => {
    const [temp, setTemp] = useState("");
    const [conditions, setConditions] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [max, setMax] = useState("");
    const [min, setMin] = useState("");
    const [wind, setWind] = useState("");
    var [id, setID] = useState("");
    let image;
    
    //fetch
    useEffect(() => {

        if (props.lat !== "" && props.lon !== "") {
            async function fetchAPI(){
                try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=5fa27a76f3e844905dbb0c506ed24496&units=imperial`)
                const data = await response.json();
                setTemp(data.main.temp);
                setConditions(data.weather[0].description);
                setID(data.weather[0].id);
                setFeelsLike(data.main.feels_like);
                setWind(data.wind.speed);
                setMax(data.main.temp_max);
                setMin(data.main.temp_min);
                    console.log(data)
                }
                catch(err)  {
                    console.log(err);
                }
            }
                fetchAPI();
        }
    }, [props.lat, props.lon]);

    //conditions code check for images
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
        <section className="container">
            <img className="img" src={image} alt="conditions" />
            <div className="card">
                <h3 style={styles.h3}>Today</h3>
                <p style={styles.p}>Temperature: {temp}°F</p>
                <p style={styles.p}>Feels Like: {feelsLike}°F</p>
                <p style={styles.p}>Conditions: {conditions}</p>
                <p style={styles.p}>Wind Speed: {wind} mph</p>
                <hr style={styles.hr}></hr>
                <p style={styles.p}>High Temp: {max}°F</p>
                <p style={styles.p}>Low Temp: {min}°F</p>
            </div>
        </section>
    )
}
export default Weather

const styles = {
    h3: {
        textAlign: 'center'
    },
    p: {
        textAlign: 'center',
        color: '#DFF0F6',
        fontSize: '18px',
        marginLeft: '10px',
        lineHeight: '40px'
    },
    hr: {
        width: '90%'
    }
}