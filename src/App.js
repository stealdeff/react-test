import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ExchangeRatesComponent from './components/CurrencyRatesByDate';
import NewPage from './components/CurrencyRatesByPeriod';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/CurrencyRatesByDate">Экран получения данных по валютам за определенный день.</Link>
          </li>
          <li>
            <Link to="/CurrencyRatesByPeriod">Экран отображения курса любой валюты в динамике</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/CurrencyRatesByPeriod" element={<NewPage />} />
        <Route path="/CurrencyRatesByDate" element={<ExchangeRatesComponent />} />
      </Routes>
    </div>
  );
};

export default App;