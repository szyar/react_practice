import React from "react";
import "./Hello.css";

const Greeting = props => {
  const element = (
    <div>
      <h1>Hello {props.name}!</h1>
    </div>
  );
  return element;
}

const Message = (props) => {
  return (
    <h2>{props.message}</h2>
  );
}

const Hello = () => {

  return (
    <div>
      <Greeting name="szyar"/>
      <Greeting name="eve" />
      <Message message="Hello there" />
      <Message message="Good to see you here" />
      <Message message="Have a nice day" />
    </div>
  );

}

export default Hello;
