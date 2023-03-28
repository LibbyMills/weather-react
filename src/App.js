import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Carlisle" />
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

export default App;
