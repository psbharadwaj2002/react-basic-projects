import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div
      className="w-full h-screen duration-1000 bg-white"
      style={{ backgroundColor: color }}
    >
      <div className="fixed rounded-full shadow-2xl max-w-80 px-4 py-4 flex flex-wrap justify-between gap-2 bottom-12 inset-x-0 mx-auto bg-white">
        <button
          onClick={() => changeColor("red")}
          className="shadow-lg px-4 py-2 flex justify-center rounded-3xl"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => changeColor("blue")}
          className="bg-blue-600 shadow-lg px-4 py-2 flex justify-center rounded-3xl"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => changeColor("green")}
          className="shadow-lg px-4 py-2 flex justify-center rounded-3xl"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
