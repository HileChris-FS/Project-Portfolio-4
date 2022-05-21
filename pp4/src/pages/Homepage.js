import React, { useEffect, useState } from "react";
import Weather from "../component/Weather";
import Location from "../component/Location";



const Homepage = props => {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [status, setStatus] = useState("");

    //check for latitude and longitude
    useEffect(() => {
        if (lat === "" && lon === "") {
        
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
        } 
    }, [lat, lon]);

    return (
        <div>
            <Location  />
            {status}
            <Weather lat={lat} lon={lon}/>
        </div>
    )
}
export default Homepage;