import {useEffect} from "react";
import SearchBox from "./components/Search/SearchBox";

function App() {
  useEffect(() => {
    document.title = "React Weather App";
  }, []);
  return (
    <div className="container mt-3">
      <h1 className="text-center">Weather Dashboard</h1>
      <SearchBox />
    </div>
  );
}

export default App;
