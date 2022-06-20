import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Context from '../src/Context';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import Context from "./Context";

// ReactDOM.render(
//   <React.StrictMode>
//     <Context>
//       <App />
//     </Context>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
