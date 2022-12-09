import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
 
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="#1e1e1e"
      size={50}
      animate={true}
    />
  );
}