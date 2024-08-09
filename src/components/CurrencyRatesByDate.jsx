import React, { useState } from 'react';
import './currencyPeriod.css'
const ExchangeRatesComponent = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [exchangeRates, setExchangeRates] = useState([]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(`https://api.nbrb.by/exrates/rates?ondate=${date}&periodicity=0`);
      const data = await response.json();
      setExchangeRates(data);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };
  return (
    <div>
      <header>  
      <h1>Exchange Rates</h1>
      </header>  
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <button id="curdate" onClick={fetchExchangeRates}>Get Exchange Rates</button>
      {exchangeRates.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Code</th>
              <th>Scale</th>
              <th>Rate</th>
            </tr>
          </thead>
          
          <tbody>
            {exchangeRates.map((rate) => (
              <tr key={rate.Cur_ID}>
                <td>{rate.Cur_Name}</td>
                <td>{rate.Cur_Abbreviation}</td>
                <td>{rate.Cur_Scale}</td>
                <td>{rate.Cur_OfficialRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ExchangeRatesComponent;