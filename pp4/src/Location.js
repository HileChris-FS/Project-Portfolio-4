import React, { useEffect, useState } from "react";

const Location = () => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
     
    

    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                FetchData(city, state)
            }}>
            <div>
                <label>City</label>
                <input
                    name="city"
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
         
    )
} 
export default Location;

function FetchData(city, state){
    const [userData, setuserData] = useState(null);
    
    console.log(city)

    useEffect(() => {
        
        async function fetchAPI(){
           
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=94f1fb706d329c672b6cb34b838937ed`)
            const data = await response.json();
            const [user] =data.results;
            setuserData(user);
            
        }
        
        fetchAPI();
        
    }, []);
    return [userData]
    }

