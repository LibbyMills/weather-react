import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="Weather forecast">
      <div class="col-3">
        <div class="day">Monday</div>
        <div class="row text-center">
          <div class="col-4">
            <div class="wx-icon">
              <img
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                class="current-wx-icon"
                id="current-wx-icon"
              />
            </div>
          </div>
          <div class="col-8">
            <ul class="forecast-temp">
              <li>
                <b>499°</b></li>
              <li>60°</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
