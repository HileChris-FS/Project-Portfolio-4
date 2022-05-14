import React, { useState, useEffect } from "react";

const Forecast = props => {
    const newDate = new Date();
    const [data, setData] = useState("");

    const date = new Date();
    const date2 = new Date();
    const date3 = new Date();
    const date4 = new Date();
    const date5 = new Date();
    const date6 = new Date();
    const date7 = new Date();
    date.setDate(newDate.getDate() + 1);
    date2.setDate(newDate.getDate() + 2);
    date3.setDate(newDate.getDate() + 3);
    date4.setDate(newDate.getDate() + 4);
    date5.setDate(newDate.getDate() + 5);
    date6.setDate(newDate.getDate() + 6);
    date7.setDate(newDate.getDate() + 7);



    useEffect(() => {;
        async function fetchAPI(){
            try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=5fa27a76f3e844905dbb0c506ed24496&units=imperial`)
            const data = await response.json();
            
            setData(data.daily);
            }
            catch(err)  {
                console.log(err);
            }
        }
        fetchAPI();
    }, [])
    console.log(data)

    return (
        <section>
           <h3>{date.toDateString()}</h3>
           <p>High {}</p>
           <h3>{date2.toDateString()}</h3>
           <h3>{date3.toDateString()}</h3>
           <h3>{date4.toDateString()}</h3>
           <h3>{date5.toDateString()}</h3>
           <h3>{date6.toDateString()}</h3>
           <h3>{date7.toDateString()}</h3>
        </section>
    )
}
export default Forecast;