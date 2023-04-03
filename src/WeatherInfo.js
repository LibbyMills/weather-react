import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="Weather info">
      <h1>Today</h1>
      <small className="dtg">
        <FormattedDate date={props.data.date} />
      </small>
      <div className="row">
        <div className="col-1 text-center wx-icon">
          <img
            src={props.data.iconURL}
            className={props.data.description}
            alt={props.data.description}
          />
        </div>
        <div className="col-3 text-center">
          <WeatherTemperature celsius={props.data.temperature} />
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
