import React from "react";
import Row from "./Row";

function Buttons(props) {
  return (
    <div className="buttons">
      <Row
        buttonDetails={[
          { id: "clear", innerText: "C", className: "double" },
          { innerText: "←" },
          { id: "divide", innerText: "÷" },
        ]}
        onButtonClick={props.onButtonClick}
      />
      <Row
        buttonDetails={[
          { id: "seven", innerText: "7" },
          { id: "eight", innerText: "8" },
          { id: "nine", innerText: "9" },
          { id: "multiply", innerText: "×" },
        ]}
        onButtonClick={props.onButtonClick}
      />
      <Row
        buttonDetails={[
          { id: "four", innerText: "4" },
          { id: "five", innerText: "5" },
          { id: "six", innerText: "6" },
          { id: "subtract", innerText: "-" },
        ]}
        onButtonClick={props.onButtonClick}
      />
      <Row
        buttonDetails={[
          { id: "one", innerText: "1" },
          { id: "two", innerText: "2" },
          { id: "three", innerText: "3" },
          { id: "add", innerText: "+" },
        ]}
        onButtonClick={props.onButtonClick}
      />
      <Row
        buttonDetails={[
          { id: "zero", innerText: "0", className: "double" },
          { id: "decimal", innerText: "." },
          { id: "equals", innerText: "=" },
        ]}
        onButtonClick={props.onButtonClick}
      />
    </div>
  );
}

export default Buttons;
