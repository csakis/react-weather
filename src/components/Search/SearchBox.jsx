import {useState} from "react";

function SearchBox() {
  const [query, setQuery] = useState("");
  return (
    <form className="row g-1" onSubmit="">
      <div className="col-sm-6">
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
        <button className="btn btn-primary">Search</button>
      </div>
    </form>
  );
}

export default SearchBox;
