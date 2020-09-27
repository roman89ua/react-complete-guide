import React from "react";

const inputComponent = (props) => {
  const stylesFoInput = {
    border: "2px solid red",
  };
  return (
    <input
      style={stylesFoInput}
      type="text"
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default inputComponent;
