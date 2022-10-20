import React from "react";
import Button from "./Button";

function Row(props) {
  return (
    <div className="row">
      {props.buttonDetails.map((button) => {
        const { id, innerText, className } = button;
        return (
          <Button
            key={id}
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
