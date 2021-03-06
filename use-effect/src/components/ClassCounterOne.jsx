import { Component } from "react";

export default class ClassCounterOne extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}
