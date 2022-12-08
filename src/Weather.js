import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: "Wednesday 07:00",
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            wind: response.data.wind.speed,
            city: response.data.city
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
                    <li>{weatherData.date}</li>
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
                                <li>Humidity: {weatherData.humidity}</li>
                                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "98t4fbbd8522b07740a7dab0ddeo035a";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric
        `;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }  
}