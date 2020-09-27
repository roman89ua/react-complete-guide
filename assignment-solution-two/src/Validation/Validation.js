import React from "react";

const Validation = (props) => {
  let validationMessage = "";
  props.length < 5
    ? (validationMessage = "Your word is to short")
    : props.length > 15
    ? (validationMessage = "Your word is to long")
    : (validationMessage = "Your word is long enough");

  return <p>{validationMessage}</p>;
};

export default Validation;
