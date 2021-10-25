import {useEffect} from "react";
import FiveDayForecast from "./components/FiveDayForecast";
import SearchBox from "./components/Search/SearchBox";
import WeatherCard from "./components/WeatherCard";

function App() {
  useEffect(() => {
    document.title = "React Weather App";
  }, []);
  return (
    <div className="container mt-3">
      <h1 className="text-center">Weather Dashboard</h1>
      <SearchBox />
      <div className="row mt-3 g-1">
        <div className="col">
          <WeatherCard />
        </div>
        <div className="col">
          <FiveDayForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
