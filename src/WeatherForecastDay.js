import React from "react";

export default function WeatherForecastDay(props) {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="day">{formatDay(props.data.time)}</div>
      <div className="row text-center">
        <div className="col-4">
          <div className="wx-icon">
            <img
              src={props.data.condition.icon_url}
              className={props.data.condition.description}
              alt={props.data.condition.description}
            />
          </div>
        </div>
        <div className="col-8">
          <ul className="forecast-temp">
            <li>
              <b>{maxTemp()}°</b>
            </li>
            <li>{minTemp()}°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
