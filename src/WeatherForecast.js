import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import"./WeatherForecast.css";
import axios from "axios";

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
                <div className="rov">
                <div className="col d-flex flex-column align-items-center mt-3">
                       <div className="WeatherForecast-day">Thursday</div> 
                       <div className="mt-2">
                       <WeatherIcon code="01d" size={36} /> 
                       </div>
                       <div className="WeatherForecast-temperatures mt-3">
                        <span className="WeatherForecast-temperature-max ">19°{" "}</span>
                        <span className="WeatherForecast-temperature-min opacity-75">10°</span>
                       </div>
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

    return null; 
    }
}