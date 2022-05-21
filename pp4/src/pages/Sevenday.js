import React  from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Forecast from "../component/Forecast";


const Sevenday = () => {
    const location = useLocation();
    const lat = location.state.lat.lat;
    const lon = location.state.lon.lon;
    const city = location.state.city.name;
    

    const navigate = useNavigate();
    
    //button back to Current page
    function current(){
        navigate("/current" , {state: {lat:{lat}, lon:{lon}, city:{city}}})
    }
    

    return (
        <div>
            <div style={styles.btnAlign}>
               <button style={styles.button} className="button" type="button" onClick={current}>Current</button>
            </div>
            <h2 style={styles.h2}>{city}</h2>
            <Forecast lat={lat} lon={lon} city={city}  />
        </div>
    )

}
export default Sevenday;

const styles = {
    btnAlign: {
        display: 'flex',
        justifyContent: 'center',  
    },
    button: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    h2: {
        textAlign: 'center'
    }
}