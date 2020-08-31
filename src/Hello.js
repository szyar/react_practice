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

const Hello = () => {

  return (
    <div>
      <Greeting name="szyar"/>
      <Greeting name="eve" />
      <h2>Good to see you here</h2>
    </div>
  );

}

export default Hello;
