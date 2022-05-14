
import { useLocation, useNavigate } from "react-router-dom";
import Weather from "../component/Weather";




const Current = () => {
    const location = useLocation();
    const lat = location.state.lat.lat;
    const lon = location.state.lon.lon;
    const city = location.state.city.city;
    const state = location.state.state.state;
    
    const navigate = useNavigate();
  
   
    function seven(){
        navigate("/sevenday" , {state: {lat:{lat}, lon:{lon}, city:{city}, state:{state}}})
    }
    
   
    return (
        <div>
            <h2>{city}, {state}</h2>
            <div>
               <button type="button" onClick={seven}>7 Day Forecast</button>
            </div>
            <Weather lat={lat} lon={lon} city={city} state={state} />
            
        </div>
    )
}
export default Current;