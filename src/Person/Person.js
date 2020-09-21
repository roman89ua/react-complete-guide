import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello, my name is {props.name}</h1>
      <p>I am a person and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
