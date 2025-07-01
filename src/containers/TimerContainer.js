import React from "react";
import Timer from "../components/Timer";

class TimeContainer extends React.Component {
  state = {
    time: 0,
  };

  getHours() {
    return Math.floor(this.state.time / 3600);
  }

  getMinutes() {
    return Math.floor((this.state.time % 3600) / 60);
  }

  getSeconds() {
    return this.state.time % 60;
  }
  componentDidMount() {
    this.id = setInterval(() => {
      this.setState((state) => {
        return { time: state.time + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <Timer
        hours={this.getHours()}
        minutes={this.getMinutes()}
        seconds={this.getSeconds()}
      />
    );
  }
}

export default TimeContainer;
