import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = () => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("")
    const navigate = useNavigate();
    useEffect (() => {
        
        if(lat !== "" && lon !== "") {
            return navigate("current" , {state: {lat:{lat}, lon:{lon}, city:{city}, state:{state}}})
        }
    
    });
   
  
    function FetchData(city, state){
            
        async function fetchAPI(){
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=90b1d38fb86d7a2a22adbb11b5585174`)
            const data = await response.json();
            setLat(data[0].lat)
            setLon(data[0].lon)
            console.log(data[0].lat)
            console.log(lat)
            
            
           
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
                </div>
            </form>
            <h2>{city} {state}</h2>
            
              
        </section>
    )
} 
export default Location;

