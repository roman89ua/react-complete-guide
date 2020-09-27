import React from "react";
import "./charStyle.css";

const Char = (props) => {
  return (
    <div onClick={props.clicked} className="charStyles">
      {props.character}
    </div>
  );
};

export default Char;
