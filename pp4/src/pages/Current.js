import React, { useEffect, useState } from "react";
import Location from "../component/Location";
import { useLocation } from "react-router-dom";
import Weather from "../component/Weather";
import Nav from "../component/Nav";




const Current = () => {
    const location = useLocation();
    const lat = location.state.lat.lat;
    const lon = location.state.lon.lon;
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    
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

    
    
    return (
        <div>
            <Nav lat={lat} lon={lon} city={city}/>
            <Location />
            <h2 style={styles.h2}>{city}, {state}</h2>
            <Weather lat={lat} lon={lon} />
            
        </div>
    )
}
export default Current;

const styles = {
    h2: {
        textAlign: 'center',
        marginBottom: '20px'
    }
}