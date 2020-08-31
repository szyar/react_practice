import React from "react";
import "./Hello.css";

const Greeting = props => {
  const element = (
    <div>
      <h1>Hello {props.name}!</h1>
    </div>
  );
  return element;
};

const Message = props => {
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
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.text} {this.state.date.toLocaleTimeString()}
        </h3>
      </div>
    );
  }
}

const Hello = (props) => {
  return (
    <div className="wrapper">
      <div className="clock-wrapper">
        <Clock text={props.text} />
      </div>
      <Greeting name={props.name} />
      <Greeting name={props.name1} />
      <Message message={props.message} />
      <Message message={props.message1} />
    </div>
  );
};

export default Hello;
