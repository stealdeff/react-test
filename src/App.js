import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import App from './App';
import Home from './components/Home';
import ExchangeRatesComponent from './components/CurrencyRatesByDate';
import DinamicRatesComponent from './components/CurrencyRatesByPeriod';
import Converter from './components/CurrencyConverter';
// const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
  return(
  <Router>
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/components/Home">Home</Link>
        </li>
        <li>
          <Link to="/CurrencyRatesByDate">Экран получения данных по валютам за определенный день</Link>
        </li>
        <li>
          <Link to="/CurrencyRatesByPeriod">Экран отображения курса любой валюты в динамике</Link>
        </li>
        <li>
          <Link to="/CurrencyConverter">Экран конвертера валют</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/components/Home" element={<Home />} />
      <Route path="/CurrencyRatesByDate" element={<ExchangeRatesComponent />} />
      <Route path="/CurrencyRatesByPeriod" element={<DinamicRatesComponent />} />
      <Route path="/CurrencyConverter" element={<Converter />} />
    </Routes>
    </div>
  </Router>
);
};
export default App;