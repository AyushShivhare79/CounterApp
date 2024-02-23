import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [value, changeValue] = useState(12);
  const addValue = () => {
    // value = value + 1;
    if (value > 16) return;
    changeValue((counter) => counter + 1);
    changeValue((counter) => counter + 1);
    changeValue((counter) => counter + 1);
    changeValue((counter) => counter + 1);
  };
  const removeValue = () => {
    // value = value - 1;
    if (value < 4) return;
    changeValue((counter) => counter - 1);
    changeValue((counter) => counter - 1);
    changeValue((counter) => counter - 1);
    changeValue((counter) => counter - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Value = {value}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
