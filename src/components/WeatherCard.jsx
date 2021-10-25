import {Fragment} from "react";
import {useSelector} from "react-redux";
import {useGetWeatherByCityNameQuery} from "../store/async/getWeatherByCityName";

function WeatherCard() {
  const {query} = useSelector((state) => state.weather);

  let {data, error, isLoading} = useGetWeatherByCityNameQuery(query, {
    skip: !query,
  });
  console.log(`data, error, isLoading`, data, error, isLoading);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div></div>;
  } else if (data) {
    content = (
      <div className="card" style={{width: "18rem"}}>
        <h3>Current Conditions</h3>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Country: {data.sys.country}
          </h6>

          <p className="card-text">
            Temperature: {parseInt(data.main.temp - 273)} deg C
          </p>
          <p className="card-text">
            Feels like: {parseInt(data.main.feels_like - 273)} deg C{" "}
          </p>
          <p className="card-text">Wind speed: {data.wind.speed} m/s</p>
          <p className="card-text">Wind direction: {data.wind.deg} deg</p>
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
}

export default WeatherCard;
