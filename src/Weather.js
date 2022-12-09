import React, { useState } from "react";
import FormatDate from "./FormatDate"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input 
                    tipe="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on"/>
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" 
                    className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormatDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img 
                        src={weatherData.iconUrl}
                        alt={weatherData.description}
                        />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>   
                    </div>
                        <div className="col-6">
                            <ul>
                                <li>Humidity: {weatherData.humidity}%</li>
                                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "a0d03cacc138649973b20df80763e262";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }  
}