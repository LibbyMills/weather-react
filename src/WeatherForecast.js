import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoad] = useState(false);
  let [forecastData, getForecastData] = useState(null);

  function handleResponse(response) {
    getForecastData(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="Weather forecast">
        <WeatherForecastDay data={forecastData[0]} />
      </div>
    );
  } else {
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    const apiKey = "cf101ecec2aca96b8t364eed41926oa0";
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }
}
