import React, { useEffect, useState } from "react";
import Weather from "../component/Weather";
import Location from "../component/Location";
import Image from "../images/rainbow.jpg"
import Nav from "../component/Nav";



const Homepage = props => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [status, setStatus] = useState("");
    let noLocation;

    //check for latitude and longitude
    useEffect(() => {
        
            if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
            } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
            }
    }, [lat, lon]);

    //fetch for reverse geocoding of city and state
    useEffect(() => {

        if (lat !== "" && lon !== "") {
            async function fetchAPI(){
                try {
                const response = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.c2d54472868006a62f7aa20f13eab55f&lat=${lat}&lon=${lon}&format=json`)
                const data = await response.json();
                setCity(data.address.city);
                setState(data.address.state);
                }
                catch(err)  {
                    console.log(err);
                }
            }
                fetchAPI();
        }
    }, [lat, lon]);

    //if location services are off
    if (status === 'Unable to retrieve your location') {
        noLocation = 
            <section>
                <h3 style={styles.h3}>Welcome! Please enter city and state to get your weather.</h3>
                <div style={styles.imgContainer}>
                    <img style={styles.img} src={Image} alt="rainbow" />
                </div>
            </section>
    } else  {
        noLocation =
        <div>
        <h2 style={styles.h2}>{city}, {state}</h2>
        <Weather lat={lat} lon={lon}/>
        </div>
    }

    return (
        <div>
            <Nav lat={lat} lon={lon} city={city}/>
            <Location  />
            <p style={styles.p}>{status}</p>
            {noLocation}
        </div>
    )
}
export default Homepage;

const styles = {
    h2: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    h3: {
        color: '#0B2027',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px'
    },
    p: {
        fontSize: '16px',
        marginLeft: '5%'
    },
    img: {
        width: '50%',
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
}