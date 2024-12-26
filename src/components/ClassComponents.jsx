import React, { Component } from "react";
export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "hello eveyone",
    };
  }

  updateChange = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ message: "how are you" });
  };

  render() {
    console.log(this.state.message);
    return (
      <>
        <h1>Class Components {this.state.count}</h1>
        <h1>Class Components {this.state.message}</h1>
        <button onClick={this.updateChange}>Update</button>
      </>
    );
  }
}
