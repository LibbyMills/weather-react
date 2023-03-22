import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [city, getCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function updateCity(event) {
    getCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showWeather);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        onChange={updateCity}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}{" "}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}mph</li>
          <li>
            <img src={weather.icon} alt="Current weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
