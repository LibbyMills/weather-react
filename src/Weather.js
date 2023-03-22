import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Carlisle",
    date: "Mon 16:44",
    description: "sunny",
    temp: [6],
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  };

  let form = (
    <form //onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Enter a city"
        //    onChange={updateCity}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-10">
              <form>{form} </form>
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
                src={weatherData.imgUrl}
                className="current-wx-icon"
                alt="Current weather icon"
              />
            </div>
            <div className="col-2 text-center">
              <span className="today-temp">{weatherData.temp}</span>
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
}
