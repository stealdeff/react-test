import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const ul1=(
  <ul type="square">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
);
const ul2=(
  <ul type="square">
    <li>1</li>
    <li>2</li>
    <li>3333</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ul1);
setTimeout(
  ()=>{root.render(ul2)},2000
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
