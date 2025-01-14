
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './currencyPeriod.css';
const CurrencyDynamicsScreen = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [currencyDynamics, setCurrencyDynamics] = useState([]);
 const[error,setError]=useState('');
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.nbrb.by/exrates/currencies');
        setCurrencies(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке списка валют:', error);
        setError('Ошибка при загрузке списка валют. Попробуйте позже.');
      }
    };
    fetchCurrencies();
  }, []);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  };

  const handleDateToChange = (event) => {
    setDateTo(event.target.value);
  };

  const fetchCurrencyDynamics = async () => {
    try {
      const response = await axios.get(`https://api.nbrb.by/exrates/rates/dynamics/${selectedCurrency}?startDate=${dateFrom}&endDate=${dateTo}`);
      if(response.data.length===0)
      {
        setError('Нет данных по динамике курса выбранной валюты за указанный период.');
    } else {
      setCurrencyDynamics(response.data);
      setError(null);
    }
 } catch (error) {
      console.error('Ошибка при загрузке динамики курса валюты:', error);
      setError('Ошибка при загрузке данных. Попробуйте позже.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCurrencyDynamics();
  };

  return (
    <div>
      <header>
      <h1>The exchange rate in dynamics</h1>
      </header>  
      <form onSubmit={handleSubmit}>
        <label>
          Дата с:
          <input type="date" value={dateFrom} onChange={handleDateFromChange} />
        </label>
        <label>
          Дата по:
          <input type="date" value={dateTo} onChange={handleDateToChange} />
        </label>
        <label>
          Валюта:
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="">Выберите валюту</option>
            {currencies.map((currency) => (
              <option key={currency.Cur_ID} value={currency.Cur_ID}>
                {currency.Cur_Name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Send a request</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {currencyDynamics.length > 0 && (
        <div>
          <h2>Динамика курса: {currencies.find((c) => c.Cur_ID === parseInt(selectedCurrency))?.Cur_Name}</h2>
          <table>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Курс</th>
              </tr>
            </thead>
            
            <tbody>
              {currencyDynamics.map((rate) => (
                <tr key={rate.Date}>
                  <td>{moment(rate.Date).format('DD.MM.YYYY')}</td>
                  <td>{rate.Cur_OfficialRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default CurrencyDynamicsScreen;