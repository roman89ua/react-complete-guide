import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [state, setState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 31 },
      { name: "Jinger", age: 22 },
    ],
    otherState: "Some other value",
  });
  const [otherState, setOtherState] = useState({
    otherState: "Some other value",
  });

  console.log(state, otherState);

  const switchValuesHandler = () => {
    setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 31 },
        { name: "Jinger", age: 29 },
      ],
    });
  };
  const changeNameHandler = (event) => {
    setState({
      ...state,
      persons: [
        { name: "Maximilian", age: 28 },
        { name: event.target.value, age: 31 },
        { name: "Jinger", age: 29 },
      ],
    });
  };
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "3px solid blue",
    padding: "8px",
    cursor: "pointer",
  };
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <button style={style} onClick={switchValuesHandler}>
        Click to switch values
      </button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person
        name={state.persons[1].name}
        age={state.persons[1].ageS}
        sentToComponent={switchValuesHandler}
        changge={changeNameHandler}
      />
      <Person name={state.persons[2].name} age={state.persons[2].age}>
        My hobby: Runinig and coding!
      </Person>
    </div>
  );
};

export default App;
