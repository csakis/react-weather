import {useSelector} from "react-redux";
import {useGetForecastByCityNameQuery} from "../store/async/getWeatherByCityName";

function FiveDayForecast() {
  const {query} = useSelector((state) => state.weather);
  let {data, error, isLoading} = useGetForecastByCityNameQuery(query, {
    skip: !query,
  });
  let content;
  if (data) {
    content = (
      <ul className="list-group">
        {data.list.map((item, index) => {
          if (index % 6 === 0) {
            return (
              <li className="list-group-item" key={item.main.temp} item>
                {(item.main.temp - 273).toFixed(2)} C
              </li>
            );
          }
        })}
      </ul>
    );
  }
  return (
    <div>
      <h3>5 day forecast</h3>
      {content}
    </div>
  );
}

export default FiveDayForecast;
