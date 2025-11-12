import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(setMsg)
      .catch(() => setMsg("Backend not reachable"));
  }, []);

  return (
    <div>
      <h1>TurboRepo MERN App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;

