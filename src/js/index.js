//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=VT323';
document.head.appendChild(link);
document.title = 'Traffic Light';

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
