
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyDynamicsScreen = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [currencyDynamics, setCurrencyDynamics] = useState([]);

  useEffect(() => {
    // Загружаем список доступных валют
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.nbrb.by/exrates/currencies');
        setCurrencies(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке списка валют:', error);
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
      setCurrencyDynamics(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке динамики курса валюты:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCurrencyDynamics();
  };

  return (
    <div>
      <h1>Экран отображения курса любой валюты в динамике</h1>

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
        <button type="submit">Отправить запрос</button>
      </form>

      {currencyDynamics.length > 0 && (
        <div>
          <h2>Динамика курса {selectedCurrency}</h2>
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
                  <td>{rate.Date}</td>
                  <td>{rate.Rate}</td>
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