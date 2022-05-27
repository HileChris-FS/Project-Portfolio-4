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

    //fetch 7 day forecast
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
            <h2 styles={styles.h2}>Getting Forecast</h2>
            <h3 style={styles.h3}>{date.toDateString()}</h3>
            <h3 style={styles.h3}>{date2.toDateString()}</h3>
            <h3 style={styles.h3}>{date3.toDateString()}</h3>
            <h3 style={styles.h3}>{date4.toDateString()}</h3>
            <h3 style={styles.h3}>{date5.toDateString()}</h3>
            <h3 style={styles.h3}>{date6.toDateString()}</h3>
            <h3 style={styles.h3}>{date7.toDateString()}</h3>
        </section>
    } else {
            forecast = <section>
            <div style={styles.cardLayout}>
                <div className="card">
                    <h3 style={styles.h3}>{date.toDateString()}</h3>
                    <p style={styles.p}>High {data[1].temp.max}°F</p>
                    <p style={styles.p}>Low {data[1].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img} src={`http://openweathermap.org/img/wn/${data[1].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[1].weather[0].main}</p>
                    </div>
                </div>
                <div className="card">
                    <h3 style={styles.h3}>{date2.toDateString()}</h3>
                    <p style={styles.p}>High {data[2].temp.max}°F</p>
                    <p style={styles.p}>Low {data[2].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img}  src={`http://openweathermap.org/img/wn/${data[2].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[2].weather[0].main}</p>
                    </div>
                </div>
                <div className="card">
                    <h3 style={styles.h3}>{date3.toDateString()}</h3>
                    <p style={styles.p}>High {data[3].temp.max}°F</p>
                    <p style={styles.p}>Low {data[3].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img}  src={`http://openweathermap.org/img/wn/${data[3].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[3].weather[0].main}</p>
                    </div>
                </div>
                <div className="card">
                    <h3 style={styles.h3}>{date4.toDateString()}</h3>
                    <p style={styles.p}>High {data[4].temp.max}°F</p>
                    <p style={styles.p}>Low {data[4].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img}  src={`http://openweathermap.org/img/wn/${data[4].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[4].weather[0].main}</p>
                    </div>
                </div>
                <div className="card">
                    <h3 style={styles.h3}>{date5.toDateString()}</h3>
                    <p style={styles.p}>High {data[5].temp.max}°F</p>
                    <p style={styles.p}>Low {data[5].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img}  src={`http://openweathermap.org/img/wn/${data[5].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[5].weather[0].main}</p>
                    </div>
                </div>
                <div className="card">
                    <h3 style={styles.h3}>{date6.toDateString()}</h3>
                    <p style={styles.p}>High {data[6].temp.max}°F</p>
                    <p style={styles.p}>Low {data[6].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img}  src={`http://openweathermap.org/img/wn/${data[6].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[6].weather[0].main}</p>
                    </div>
                </div>
                <div className="card">
                    <h3 style={styles.h3}>{date7.toDateString()}</h3>
                    <p style={styles.p}>High {data[7].temp.max}°F</p>
                    <p style={styles.p}>Low {data[7].temp.min}°F</p>
                    <div style={styles.imgAlign}>
                        <p style={styles.p}>Conditions</p>
                        <img style={styles.img}  src={`http://openweathermap.org/img/wn/${data[7].weather[0].icon}@2x.png`} alt="icon"></img>
                        <p style={styles.p}>{data[7].weather[0].main}</p>
                    </div>
                </div>
            </div>
        </section>
    }
    
    return (
        <section>
           {forecast}
        </section>
    )
}
export default Forecast;

const styles = {
    h2: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    h3: {
        textAlign: 'center'
    },
    p: {
        color: '#DFF0F6',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '26px'
    },
    imgAlign: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    },
    img: {
        width: '100px',
        height: '100px',
        margin: 'auto'
    },
    cardLayout: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
}