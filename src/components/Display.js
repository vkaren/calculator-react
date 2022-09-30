import React from "react";

function Display(props) {
  return (
    <div id="display">
      <h3 className="reminder">{props.reminder}</h3>
      <h1 className="display">{props.display}</h1>
    </div>
  );
}

export default Display;
