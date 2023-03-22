import "./App.css";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <SearchEngine city="Carlisle" />
      </header>
    </div>
  );
}

export default App;
