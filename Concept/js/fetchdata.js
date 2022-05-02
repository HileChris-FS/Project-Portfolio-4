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
        console.log(this.data);
        });

        this.displayWeather();
    
    }

    displayWeather() {
        console.log(this.data.main);
        const section = document.querySelector("section");
        let article = document.createElement("article");
        section.append(article);
        article.innerHTML = `
            <h3>${this.city}, ${this.state}<h3>
            <p>Temperature ${this.data.main.temp}°F<p>
            <p>Feels like ${this.data.main.feels_like}°F<p>
            <p>${this.data.weather[0].main}<p>
        `;
    }

   
    
}