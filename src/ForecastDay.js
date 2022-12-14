import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
}

function minTemp(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;  
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}
    return (
     <div>
          <div className="WeatherForecast-day">{day()}</div> 
          <div className="mt-2">
           <WeatherIcon code={props.data.weather[0].icon} size={36} />
          </div>
          <div className="WeatherForecast-temperatures">
           <span className="WeatherForecast-temperature-max">{maxTemp()}{" "}</span>
           <span className="WeatherForecast-temperature-min opacity-75">{minTemp()}</span>
          </div>
        </div>
    );
}