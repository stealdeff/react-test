import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ExchangeRatesComponent from './components/CurrencyRatesByDate';
import DinamicRatesComponent from './components/CurrencyRatesByPeriod';
import Converter from './components/CurrencyConverter';
import './Project.css';
const App = ()=>{
  return(
  <Router>
    <div class="container">
    <input type="checkbox" id="toggle" checked />
    <label class="button" for="toggle">
    <nav class="nav">
      <ul>
        <li>
          <Link to="/components/Home">Home</Link>
        </li>
        <li>
          <Link to="/CurrencyRatesByDate">Курсы валют</Link>
        </li>
        <li>
          <Link to="/CurrencyRatesByPeriod">Динамика курсов</Link>
        </li>
        <li>
          <Link to="/CurrencyConverter">Конвертер валют</Link>
        </li>
      </ul>
    </nav>
    </label>

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