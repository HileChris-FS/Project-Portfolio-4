import Location from "../component/Location";
import { useLocation } from "react-router-dom";
import Weather from "../component/Weather";




const Current = () => {
    const location = useLocation();
    const lat = location.state.lat.lat;
    const lon = location.state.lon.lon;
    const city = location.state.city.city;
    
    return (
        <div>
            <Location />
            <Weather lat={lat} lon={lon} city={city}  />
            
        </div>
    )
}
export default Current;