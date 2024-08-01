// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ExchangeRatesComponent  from './components/CurrencyRatesByDate'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ExchangeRatesComponent />)


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);