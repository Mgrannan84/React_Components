import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const buttonText = "Click Me";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "black", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
