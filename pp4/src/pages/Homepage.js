import React, { useEffect, useState } from "react";
import Weather from "../component/Weather";
import Location from "../component/Location";



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
            </section>
    }

    return (
        <div>
            <Location  />
            <p style={styles.p}>{status}</p>
            {noLocation}
            <Weather lat={lat} lon={lon}/>
        </div>
    )
}
export default Homepage;

const styles = {
    h3: {
        color: '#0B2027',
        textAlign: 'center',
        marginTop: '20px'
    },
    p: {
        fontSize: '16px',
        marginLeft: '5%'
    }
}