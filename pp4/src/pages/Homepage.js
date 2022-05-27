import React, { useEffect, useState } from "react";
import Weather from "../component/Weather";
import Location from "../component/Location";
import Image from "../images/rainbow.jpg"
import Nav from "../component/Nav";



const Homepage = props => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [city, setCity] = useState("");
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

    useEffect(() => {

        if (lat !== "" && lon !== "") {
            async function fetchAPI(){
                try {
                const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=d4320c0f6322c4e169fa0fc2042ee910&query=${lat},${lon}&output=json`)
                const data = await response.json();
                setCity(data.data[1].locality);
                }
                catch(err)  {
                    console.log(err);
                }
            }
                fetchAPI();
        }
    }, [lat, lon]);

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
        <Weather lat={lat} lon={lon}/>
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