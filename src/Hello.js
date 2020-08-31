import React from "react";
import ReactDOM from "react-dom";
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
  return <h3>{props.message}</h3>;
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
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

const Hello = () => {
  return (
    <div>
      <Clock />
      <Greeting name="szyar" />
      <Greeting name="eve" />
      <Message message="Hello there" />
      <Message message="Good to see you here" />
      <Message message="Have a nice day" />
    </div>
  );
};

export default Hello;
