import React, { Component } from "react";
import "./App.css";
import InputComponent from "./InputComponent/InputComponent";
import OutputComponent from "./OutputComponent/OutputComponent";

class App extends Component {
  state = {
    username: "Roman Kostiuk",
  };
  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <InputComponent
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <OutputComponent userName={this.state.username} />
        <OutputComponent userName={this.state.username} />
        <OutputComponent userName="Roman" />
      </div>
    );
  }
}

export default App;
