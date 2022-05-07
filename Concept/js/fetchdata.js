class FetchData {
    constructor() {
        document.querySelector("#submit").addEventListener("click", e => this.onSubmit(e));
    }

    onSubmit(e) {
        e.preventDefault();

        this.city = document.querySelector("#city").value;
        this.state = document.querySelector("#state").value;

        this.fetchData();
    }

    async fetchData() {
        const location = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + this.city + "," + this.state + ", US&limit=1&appid=94f1fb706d329c672b6cb34b838937ed")
        .then((response) => response.json());
       
        this.lat = location[0].lat;
        this.lon = location[0].lon;
        this.locationReqOpts = { method: 'POST', body: JSON.stringify({ location }) };

        await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.lat + "&lon=" + this.lon + "&appid=94f1fb706d329c672b6cb34b838937ed&units=imperial", this.locationReqOpts)
        .then((response) => response.json())
        .then((responseAsJson) => {
        this.data = responseAsJson;
        });

        await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + this.lat + "&lon=" + this.lon + "&exclude=currrent,minutely,hourly,alerts&appid=94f1fb706d329c672b6cb34b838937ed&units=imperial", this.locationReqOpts)
        .then((response) => response.json())
        .then((responseAsJson) => {
        this.data2 = responseAsJson;
        });

        this.displayWeather();
    
    }

    displayWeather() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const day2 = new Date();
        const day3 = new Date();
        const day4 = new Date();
        const day5 = new Date();
        const day6 = new Date();
        const day7 = new Date();

        day2.setDate(today.getDate() + 1);
        const split2 = day2.toISOString().split('T')[0];
        const weekday2 = days[day2.getDay()];
        
        day3.setDate(today.getDate() + 2);
        const split3 = day3.toISOString().split('T')[0];
        const weekday3 = days[day3.getDay()];

        day4.setDate(today.getDate() + 3);
        const split4 = day4.toISOString().split('T')[0];
        const weekday4 = days[day4.getDay()];

        day5.setDate(today.getDate() + 4);
        const split5 = day5.toISOString().split('T')[0];
        const weekday5 = days[day5.getDay()];

        day6.setDate(today.getDate() + 5);
        const split6 = day6.toISOString().split('T')[0];
        const weekday6 = days[day6.getDay()];

        day7.setDate(today.getDate() + 6);
        const split7 = day7.toISOString().split('T')[0];
        const weekday7 = days[day7.getDay()];
        
        const section = document.querySelector("section");
        let article = document.createElement("article");
        section.append(article);
        article.innerHTML = `
            <h3>${this.city}, ${this.state}<h3>
            <h4>${today}<h4>
            <p>Temperature ${this.data.main.temp}°F<p>
            <p>Feels like ${this.data.main.feels_like}°F<p>
            <p>${this.data.weather[0].main}<p>
            <p>7 Day Forcast<p>
            <p>${weekday2} ${split2}<p>
            <p>Temperature ${this.data2.daily[1].temp.day}<p>
            <p>${weekday3} ${split3}<p>
            <p>Temperature ${this.data2.daily[2].temp.day}<p>
            <p>${weekday4} ${split4}<p>
            <p>Temperature ${this.data2.daily[3].temp.day}<p>
            <p>${weekday5} ${split5}<p>
            <p>Temperature ${this.data2.daily[4].temp.day}<p>
            <p>${weekday6} ${split6}<p>
            <p>Temperature ${this.data2.daily[5].temp.day}<p>
            <p>${weekday7} ${split7}<p>
            <p>Temperature ${this.data2.daily[6].temp.day}<p>
        `;
    }

   
    
}