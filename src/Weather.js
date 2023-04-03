import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      iconURL: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
  function search() {
    const apiKey = "cf101ecec2aca96b8t364eed41926oa0";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleCitySearched(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  onChange={handleCitySearched}
                  className="location-input"
                />
              </div>
              <span className="col-2">
                <input type="submit" value="Search" className="button" />
              </span>
              <span className="col-2">
                <button>Current location</button>
              </span>
            </form>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
