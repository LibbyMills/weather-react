import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      iconURL: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="row">
            <div className="col-10">
              <form>
                <input type="search" placeholder="Enter a city"></input>
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="col-2">
              <button>Current location</button>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    const apiKey = "cf101ecec2aca96b8t364eed41926oa0";
    let query = "London";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
