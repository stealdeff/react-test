import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ExchangeRatesComponent from './components/ExchangeRatesComponent';
import CurrencyRatesByPeriod from './components/CurrencyRatesByPeriod';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Exchange Rates</Link>
          </li>
          <li>
            <Link to="/currency-rates-by-period">Currency Rates By Period</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/currency-rates-by-period" element={<CurrencyRatesByPeriod />} />
        <Route path="/" element={<ExchangeRatesComponent />} />
      </Routes>
    </div>
  );
};

export default App;