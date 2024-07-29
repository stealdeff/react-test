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
  ()=>{root.render(ul2)},8000
)


function Welcome(props) {
  return <div>Welcome {props.name} {props.surename}</div>;
}

function App(props) {
  const names = [
    { name: "John", surename: "Doe" },
    { name: "Billy", surename: "Bootcher" },
    { name: "Anny", surename: "January" },
  ];

  return (
    <div>
      <Welcome name={names[0].name} surename={names[0].surename} />
      <Welcome name={names[1].name} surename={names[1].surename} />
      <Welcome name={names[2].name} surename={names[2].surename} />
    </div>
  );
}

root.render(<App />);
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
