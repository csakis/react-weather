import {useState} from "react";
import {useDispatch} from "react-redux";
// import {getWeatherByCityNameAsync} from "../../store/async/getWeatherByCityName";
import {setWeatherQuery} from "../../store/weatherSlice";
function SearchBox() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const buttonHandler = (e) => {
    e.preventDefault();
    dispatch(setWeatherQuery(query));
  };

  return (
    <form className="row g-1" onSubmit={(e) => buttonHandler(e)}>
      <div className="col-sm-6 offset-3">
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="searchBox"
          placeholder="Enter City Name"
        />
      </div>
      <div className="col-sm-2">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
