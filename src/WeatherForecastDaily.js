import React from "react";

export default function WeatherForecastDaily (props) {
    console.log(props);
    function maxTemperature() {
        let maxTemp = Math.round(props.data.temp.max);
        return `${maxTemp}°`;
    }

    function minTemperature() {
        let minTemp = Math.round(props.data.temp.min);
        return `${minTemp}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day];
    }

    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <div className="WeatherForecast-Icon mt-2">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].description}
          />
        </div>
        <div className="WeatherForecast-temperatures  mt-3">
          <span className="WeatherForecastTemp-max">{maxTemperature()}</span>
          <span className="WeatherForecastTemp-min opacity-75">
            {minTemperature()}
          </span>
        </div>
      </div>
    );
}

