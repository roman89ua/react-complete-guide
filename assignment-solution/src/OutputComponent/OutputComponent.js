import React from "react";
import "./OutputComponent.css";

const outputComponent = (props) => {
  return (
    <div className="OutputComponent">
      <p>Ma name is {props.userName}</p>
      <p>Some text to change</p>
    </div>
  );
};

export default outputComponent;
