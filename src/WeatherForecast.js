import React, { useState, useEffect } from "react";
import"./WeatherForecast.css";
import WeatherForecastDaily from "./WeatherForecastDaily";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
       }, [props.coordinates]);
     

    function handleResponse (response) {
        setForecast(response.data.daily);

        setLoaded(true);
    }

    if (loaded) {
        return(
            <div className="WeatherForecast">
                <div className="rov">
                <div className="col d-flex flex-column align-items-center mt-3">
                {forecast.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index} className="col Forecast-Day">
                <WeatherForecastDaily data={dailyForecast} />
              </div>
            );
          }
          return null;
         })}
                
                </div>
            </div>
            </div>
         );
    } else {
        let apiKey = "a0d03cacc138649973b20df80763e262";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    }
}