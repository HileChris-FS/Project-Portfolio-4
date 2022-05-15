import React, { useState, useEffect } from "react";

const Forecast = props => {
    const fetchURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=5fa27a76f3e844905dbb0c506ed24496&units=imperial`
    const [data, setData] = useState("");
    let forecast;

    //set dates
    const newDate = new Date();
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

    //fetch
    useEffect(() => {
        async function fetchAPI(){
            try {
            const response = await fetch(fetchURL)
            const data = await response.json();
            
            setData(data.daily);
         
            }
            catch(err)  {
                console.log(err);
            }
        }
        fetchAPI();
    }, [fetchURL]);

    //condition to handle undefined data before fetch
    if (data === "") {
        forecast =<section>
            <h3>{date.toDateString()}</h3>
            <h3>{date2.toDateString()}</h3>
            <h3>{date3.toDateString()}</h3>
            <h3>{date4.toDateString()}</h3>
            <h3>{date5.toDateString()}</h3>
            <h3>{date6.toDateString()}</h3>
            <h3>{date7.toDateString()}</h3>
        </section>
    } else {
            forecast = <section>
            <h3>{date.toDateString()}</h3>
            <p>High {data[1].temp.max}</p>
            <p>Low {data[1].temp.min}</p>
            <p>Conditions {data[1].weather[0].main}</p>
            <h3>{date2.toDateString()}</h3>
            <p>High {data[2].temp.max}</p>
            <p>Low {data[2].temp.min}</p>
            <p>Conditions {data[2].weather[0].main}</p>
            <h3>{date3.toDateString()}</h3>
            <p>High {data[3].temp.max}</p>
            <p>Low {data[3].temp.min}</p>
            <p>Conditions {data[3].weather[0].main}</p>
            <h3>{date4.toDateString()}</h3>
            <p>High {data[4].temp.max}</p>
            <p>Low {data[4].temp.min}</p>
            <p>Conditions {data[4].weather[0].main}</p>
            <h3>{date5.toDateString()}</h3>
            <p>High {data[5].temp.max}</p>
            <p>Low {data[5].temp.min}</p>
            <p>Conditions {data[5].weather[0].main}</p>
            <h3>{date6.toDateString()}</h3>
            <p>High {data[6].temp.max}</p>
            <p>Low {data[6].temp.min}</p>
            <p>Conditions {data[6].weather[0].main}</p>
            <h3>{date7.toDateString()}</h3>
            <p>High {data[7].temp.max}</p>
            <p>Low {data[7].temp.min}</p>
            <p>Conditions {data[7].weather[0].main}</p>
        </section>
    }
    
    return (
        <section>
           {forecast}
        </section>
    )
}
export default Forecast;