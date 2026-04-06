import { useState } from "react";
   export default function Weather() {
const [city, setCity] = useState("");
const [data, setData] = useState(null);
    
    const API_KEY = "51dbc2e35013d0138f149246b2278a3a";
    const getWeather = async () => {
const res = await fetch(
 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
 );
const result = await res.json();
setData(result);
};
    return (
 <div>
  <h2>Weather Page</h2>
    <input type="text" placeholder="Enter city"onChange={(e) => setCity(e.target.value)}/>
    <button onClick={getWeather}>Search</button>
        {data && (
    <div>
        <h3>{data.name}</h3>
        <p>Temperature: {data.main.temp} °C</p>
        <p>Weather: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
    </div>
)}
 </div>
 );
}
