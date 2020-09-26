import React from "react";
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <h1>Hello, my name is {props.name}</h1>
      <p onClick={props.sentToComponent}>I am a person and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changge} value={props.name} />
    </div>
  );
};

export default Person;
