import React from "react";
import "./Hello.css";

const Greeting = (props) => {
  const element = (
    <div>
      <h1>Hello {props.name}!</h1>
    </div>
  );
  return element;
};

const Message = (props) => {
  return <h4>{props.message}</h4>;
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
      <h3>{this.props.text} {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

const Hello = () => {
  return (
    <div>
      <Clock text="It is" />
      <Greeting name="szyar" />
      <Greeting name="eve" />
      <Message message="Good to see you here" />
      <Message message="Have a nice day" />
    </div>
  );
};

export default Hello;
