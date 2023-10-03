import React from "react";

const Button = ({ name, color, setColor }) => {
  return (
    <button
      className="outline-none px-4 text-white rounded-full"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {name}
    </button>
  );
};

export default Button;
