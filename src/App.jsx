import {useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = "React Weather App";
  }, []);
  return (
    <div className="container mt-3">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
