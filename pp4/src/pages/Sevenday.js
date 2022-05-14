import React  from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Forecast from "../component/Forecast";


const Sevenday = () => {
    const location = useLocation();
    const lat = location.state.lat.lat;
    const lon = location.state.lon.lon;
    const city = location.state.city.city;
    const state = location.state.state.state;

    const navigate = useNavigate();
    

    function current(){
        navigate("/current" , {state: {lat:{lat}, lon:{lon}, city:{city}, state:{state}}})
    }
    

    return (
        <div>
            <h2>{city}, {state}</h2>
            <div>
               <button type="button" onClick={current}>Current</button>
            </div>
            <Forecast lat={lat} lon={lon} city={city} state={state} />
        </div>
    )

}
export default Sevenday;