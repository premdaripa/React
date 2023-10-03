import { useState } from "react";
import "./App.css";
import "./colour";
import { colors } from "./colour";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">
          {colors.map((color, index) => (
            <Button
              key={index}
              color={color.color}
              name={color.name}
              setColor={setColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
