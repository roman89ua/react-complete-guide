import React, { Component } from "react";

import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };
  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  deleteItemHandler = (id) => {
    const text = this.state.userInput.split("");
    text.splice(id, 1);
    const joinedText = text.join("");
    this.setState({ userInput: joinedText });
  };
  render() {
    let charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          clicked={() => this.deleteItemHandler(index)}
          character={ch}
          key={index}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
