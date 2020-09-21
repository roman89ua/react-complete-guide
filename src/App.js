import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 31 },
      { name: "Jinger", age: 22 },
    ],
  };

  switchHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 31 },
        { name: "Jinger", age: 29 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.switchHandler}>Click to Switch</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobby: Runinig.
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "My name is VOVA")
    // );
  }
}

export default App;
