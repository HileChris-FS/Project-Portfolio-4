import React, { useEffect, useState } from "react";
import Weather from "../component/Weather";
import Location from "../component/Location";
import Image from "../images/rainbow.jpg"


const Homepage = props => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
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