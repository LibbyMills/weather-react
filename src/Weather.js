import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: `Mon 16:44`,
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

          <h1>Today</h1>

          <small className="dtg">{weatherData.date}</small>
          <div className="row">
            <div className="col-1 text-center">
              <img
                src={weatherData.iconURL}
                className={weatherData.description}
                alt="Current weather icon"
              />
            </div>
            <div className="col-2 text-center">
              <span className="today-temp">
                {Math.round(weatherData.temperature)}
              </span>
            </div>
            <div className="col-1 text-center">
              <span className="units">°C</span>
            </div>
            <div className="col-1 text-center">
              <div className="vertical"></div>
            </div>
            <div className="col-7">
              <span className="response">
                In {weatherData.city} today...{weatherData.description}
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="sign-off">
          <a
            href="https://github.com/LibbyMills/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          , by Libby Mills
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
