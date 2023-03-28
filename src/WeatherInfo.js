import React from "react";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="Weather info">
      <h1>Today</h1>
      <small className="dtg">
        <FormattedDate date={props.data.date} />
      </small>
      <div className="row">
        <div className="col-1 text-center">
          <img
            src={props.data.iconURL}
            className={props.data.description}
            alt="Current weather icon"
          />
        </div>
        <div className="col-2 text-center">
          <span className="today-temp">
            {Math.round(props.data.temperature)}
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
            In {props.data.city} today...{props.data.description}
          </span>
        </div>
      </div>
    </div>
  );
}
