import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello from "./Hello";
// import Game from "./Game";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Hello text="It is" name="szyar" name1="eve"
      message="Nice to meet you" message1="Have a nice day" />
    {/* <Game /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
