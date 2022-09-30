import React from "react";
import Button from "./Button";

function Row(props) {
  return (
    <div className="row">
      {props.buttonDetails.map((button, index) => {
        const { id, innerText, className } = button;
        return (
          <Button
            key={index}
            id={id}
            innerText={innerText}
            className={className}
            onButtonClick={props.onButtonClick}
          />
        );
      })}
    </div>
  );
}

export default Row;
