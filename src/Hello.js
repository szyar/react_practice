import React from "react";
import "./Hello.css";

class Hello extends React.Component {

  render() {
    const element = (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here</h2>
      </div>
    );

    return(
      element
    );
  }
}

export default Hello;
