import React from "react";
import ReactDOM from "react-dom";


import { CustomInput } from "./lib"

const App = () => (
<div style={{ width: 640, margin: "15px auto" }}>
    <h1>Michine Test</h1>
    <CustomInput placeholder="type here" />
  </div>

  )
ReactDOM.render(<App />, document.getElementById("root"));