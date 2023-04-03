import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celesius");
  function showFahrenheit(event) {
    event.preventdefault();
    setUnit("fahrenheit");
  }
  function showCelesius(event) {
    event.preventdefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="today-temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C|{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="today-temp">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelesius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
