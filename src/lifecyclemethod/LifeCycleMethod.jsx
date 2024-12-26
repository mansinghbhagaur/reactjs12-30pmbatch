import React from "react";

export default class LifeCycleMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0, //initialize
    };
    console.log("constructor called", this.state.count);
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called"); //not called in this example
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called"); //called before unmounting
  }

  render() {
    console.log("rander Called");
    return (
      <>
        <h1> Life Cycle Method</h1>
        <h1> {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update
        </button>
      </>
    );
  }
}
