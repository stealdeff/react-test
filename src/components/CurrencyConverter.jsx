import React, { useState, useEffect } from 'react';
import './currencyPeriod.css'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('0.00');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
        const data = await response.json();
        setRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchRates();
  }, []);

  useEffect(() => {
    const convertCurrency = async () => {
      const fromId = getCurrencyId(fromCurrency);
      const toId = getCurrencyId(toCurrency);

      const fromRate = rates.find((rate) => rate.Cur_ID === fromId)?.Cur_OfficialRate || 1;
      const toRate = rates.find((rate) => rate.Cur_ID === toId)?.Cur_OfficialRate || 1;

      const result = (amount * toRate) / fromRate;
      setResult(result.toFixed(2));
    };

    convertCurrency();
  }, [amount, fromCurrency, toCurrency, rates]);

  const getCurrencyId = (currency) => {
    const currencyData = rates.find((rate) => rate.Cur_Abbreviation === currency);
    return currencyData?.Cur_ID || null;
  };

  return (
    <div>
      <header>  
      <h1>Currency converter</h1>
      </header>  
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="from">From:</label>
        <select
          id="from"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {rates.map((rate) => (
            <option key={rate.Cur_ID} value={rate.Cur_Abbreviation}>
              {rate.Cur_Abbreviation} - {rate.Cur_Name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="to">To:</label>
        <select
          id="to"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {rates.map((rate) => (
            <option key={rate.Cur_ID} value={rate.Cur_Abbreviation}>
              {rate.Cur_Abbreviation} - {rate.Cur_Name}
            </option>
          ))}
        </select>
      </div>
      <p id="res">Result: {result}</p>
    </div>
  );
};

export default CurrencyConverter;