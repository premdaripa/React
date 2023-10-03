import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);
  function increaseHandeler() {
    if (counter >= 20) {
      alert("Out of bound");
    } else {
      setCounter(counter + 1);
    }
  }

  function decreaseHandeler() {
    if (counter <= 0) {
      alert("Out of bound");
    } else {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <div className="warper">
        <h1>Counter app</h1>
        <div>Counter value : {counter} </div>
        <button onClick={increaseHandeler}>Increase</button>
        <button onClick={decreaseHandeler}>Decrease</button>
      </div>
    </>
  );
}

export default App;
