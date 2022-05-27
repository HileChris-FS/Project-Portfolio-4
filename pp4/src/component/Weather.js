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
    const [feelsLike, setFeelsLike] = useState("")
    var [id, setID] = useState("");
    const [name, setName] = useState("");
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
                setName(data.name);
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
        <section>
            <h2 style={styles.h2}>{name}</h2>
            <div style={styles.imgContainer}>
            <img style={styles.image} src={image} alt="conditions" />
            </div>
            <div style={styles.card}>
                <div  className="card">
                    <h3 style={styles.h3}>Today</h3>
                    <p style={styles.p}>Temperature: {temp}°F</p>
                    <p style={styles.p}>Feels Like: {feelsLike}°F</p>
                    <p style={styles.p}>Conditions: {conditions}</p>
                </div>
            </div>
           
        </section>
    )
}
export default Weather

const styles = {
    image: {
        width: '50%',
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    h2: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    h3: {
        textAlign: 'center'
    },
    p: {
        color: '#DFF0F6',
        fontSize: '18px',
        marginLeft: '10px',
        lineHeight: '26px'
    },
    btnAlign: {
        display: 'flex',
        justifyContent: 'center',  
    },
    button: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    card: {
        display: 'flex',
        justifyContent: 'center'
    }
}