import React, { useState } from "react";
import Weather from "./Weather";

const Location = () => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("")
    const renderWeather = () => {
        if(lat !== "" && lon !== "") {
            return <Weather lat={lat} lon={lon} />
        }
    }
    function FetchData(city, state){
            
        async function fetchAPI(){
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=94f1fb706d329c672b6cb34b838937ed`)
            const data = await response.json();
            setLat(data[0].lat)
            setLon(data[0].lon)
           
        }
        fetchAPI(); 
    }
   
    return (
        <section>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    FetchData(city, state);
                }}>
                <div>
                    <label>City</label>
                    <input
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label>State</label>
                    <input
                        name="state"
                        onChange={(e) => setState(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={() => window.location.reload()}>Reset</button>
                </div>
            </form>
            <h2>{city} {state}</h2>
            {renderWeather()}
              
        </section>
    )
} 
export default Location;

