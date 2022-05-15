import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = () => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("")
    const navigate = useNavigate();
    const [error, setError] = useState("")
   
    //verify defined lat and lon
    useEffect (() => {
        
        if(lat !== "" && lon !== "") {
            return navigate("current" , {state: {lat:{lat}, lon:{lon}, city:{city}, state:{state}}})
        }
    
    });
   
    //fetch function
    function FetchData(city, state){
        
        async function fetchAPI(){
            try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=5fa27a76f3e844905dbb0c506ed24496`)
            const data = await response.json();
            setLat(data[0].lat)
            setLon(data[0].lon)
        }
            catch(err)  {
                console.log(err)
                setError("Check location and retry.")
                
                
            }
        }
        fetchAPI(); 

        function Wrong() {
            error = <h3>Please check the spelling of your location and retry.</h3>
        }
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
                </div>
            </form>
            <h2>{city} {state}</h2>
            {error}
            
              
        </section>
    )
} 
export default Location;

