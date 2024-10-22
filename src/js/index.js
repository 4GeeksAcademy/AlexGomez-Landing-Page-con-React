//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import {Home} from "./component/Home/Home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

