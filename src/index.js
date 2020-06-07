import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import store from "./appStore";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
