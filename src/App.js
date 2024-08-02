import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import ExchangeRatesComponent from './components/CurrencyRatesByDate';
import NewPage from './components/CurrencyRatesByPeriod';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CurrencyRatesByDate">Экран получения данных по валютам за определенный день</Link>
        </li>
        <li>
          <Link to="/CurrencyRatesByPeriod">Экран отображения курса любой валюты в динамике</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CurrencyRatesByDate" element={<ExchangeRatesComponent />} />
      <Route path="/CurrencyRatesByPeriod" element={<NewPage />} />
    </Routes>
  </Router>
);
export default App;