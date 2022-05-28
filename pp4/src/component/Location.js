import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Location = props => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("")
    const navigate = useNavigate();
    
   
    //verify defined lat and lon
    useEffect (() => {
        
        if(lat !== "" && lon !== "") {
            return navigate("/current" , {state: {lat:{lat}, lon:{lon}, city:{city}, state:{state}}})
        }
    
    }, [lat, lon, city, state, navigate]);
   
    //fetch Latitude and Longitude
    function FetchData(city, state){
        
        async function fetchAPI(){
            try {
            const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.c2d54472868006a62f7aa20f13eab55f&q=${city},${state}&format=json`)
            const data = await response.json();
            setLat(data[0].lat);
            setLon(data[0].lon);
        }
            catch(err)  {
                console.log(err)
                alert("Check location and retry.")
            }
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
                <div style={styles.submitBox}>
                    <div style={styles.inputs}>
                        <div style={styles.space}>
                            <label style={styles.label}>City</label>
                            <input style={styles.inputBar}
                                name="city"
                                onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div style={styles.space}>
                            <label style={styles.label}>State</label>
                            <input style={styles.inputBar}
                                name="state"
                                onChange={(e) => setState(e.target.value)} />
                        </div>
                        <button className="button" type="submit" >Submit</button>
                    </div>
                </div>
                
            </form>
           
            
              
        </section>
    )
} 
export default Location;

const styles ={
    label: {
        fontSize: '18px',
        margin: '0 10px',
        color: '#DFF0F6'
    },
    inputs: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    inputBar: {
        backgroundColor: '#DFF0F6',
        border: 'solid'
    },
    space: {
        marginTop: '18px'
    },
    submitBox: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
        backgroundColor: '#0B2027'
    }
   
}