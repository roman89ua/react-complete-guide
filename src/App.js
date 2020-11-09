import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

const App = (props) => {
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 31, hobby: "My hobby: Runing and coding" },
      { id: 3, name: "Jinjer", age: 22 },
    ],
  });

  const [showPersons, setShowPersons] = useState(false);

  const deletePersonHandler = (personIndex) => {
    let persons = state.persons;
    persons = persons.filter((value, index) => index !== personIndex);
    setState({
      persons: persons,
    });
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  const changeNameHandler = (event, id) => {
    const personIndex = state.persons.findIndex((p) => {
      return p.id === id;
    });
    let person = {
      ...state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...state.persons];
    persons[personIndex] = person;
    setState({ persons: persons });
  };
  const style = {
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black',
    }
  }
  let persons = null;
  if (showPersons) {
    persons = (
      <div>
        {state.persons.length > 0 ? (
          state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => deletePersonHandler(index)}
                changed={(event) => changeNameHandler(event, person.id)}
                key={person.id}
              >
                {person.hobby}
              </Person>
            );
          })
        ) : (
          <h4>No persons in a list</h4>
        )}
      </div>
    );
  }

  let classes = [];

  if(state.persons.length < 3){
    classes.push('text_bold');
  }
  if(state.persons.length < 2){
    classes.push('text_red');
  }

  return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React App</h1>
          <p className={classes.join(' ')}>It's really working</p>
          {showPersons ? (
            <button className="btn red_bg" style={style} onClick={togglePersonsHandler}>
              Hide Persons
            </button>
          ) : (
            <button className="btn green_bg" style={style} onClick={togglePersonsHandler}>
              Show Persons
            </button>
          )}
          {persons}
        </div>
      </StyleRoot>
  );
};

export default Radium(App);
