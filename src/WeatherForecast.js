import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoad] = useState(false);
  let [forecastData, getForecastData] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    getForecastData(response.data.daily);
    setLoad(true);
  }

  if (loaded) {
    return (
      <div className="Weather forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
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
