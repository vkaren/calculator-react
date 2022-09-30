import React from "react";

function Button(props) {
  return (
    <button
      id={props.id}
      className={props.className}
      onClick={props.onButtonClick}
    >
      {props.innerText}
    </button>
  );
}

export default Button;
