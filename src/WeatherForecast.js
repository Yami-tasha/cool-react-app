import React, { useState } from "react";
import"./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
        setForecast(response.data.daily);

        setLoaded(true);
    }

    if (loaded) {
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index < 6) {
                        return (
                            <div className="col d-flex flex-column align-items-center mt-3" key={index}>
                                <ForecastDay data={dailyForecast} />
                            </div>
                        );
                    }
                    })}
                </div>
            </div>
         );
    } else {
        let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null; 
    }
}