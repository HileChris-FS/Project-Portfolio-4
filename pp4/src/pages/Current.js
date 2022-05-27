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
                const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=d4320c0f6322c4e169fa0fc2042ee910&query=${lat},${lon}&output=json`)
                const data = await response.json();
                setCity(data.data[1].locality);
                setState(data.data[1].region);
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