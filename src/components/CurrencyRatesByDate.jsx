import React, { useState } from 'react';

export const DateInput=() => {
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleDateChange = (event) => {
      const inputDate = new Date(event.target.value);
      const currentDate = new Date();
  
      if (
        inputDate.getDate() !== parseInt(event.target.value.split('-')[2], 10) ||
        inputDate.getMonth() + 1 !== parseInt(event.target.value.split('-')[1], 10) ||
        inputDate.getFullYear() !== parseInt(event.target.value.split('-')[0], 10) ||
        inputDate > currentDate
      ) {
        alert('Please enter a valid date.');
        setSelectedDate('');
      } else {
        setSelectedDate(event.target.value);
      }
    };
  
    return (
      <div>
        <label htmlFor="dateInput">Select a date:</label>
        <input
          type="date"
          id="dateInput"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <p>Selected date: {selectedDate}</p>
      </div>
    );
  }
  export const  CurScaleComponent=()=> {
    const [dateInput, setDateInput] = useState('');
    const [curScale, setCurScale] = useState('');

    const getCurScale = () => {
        fetch('https://api.nbrb.by/exrates/currencies')
            .then(response => response.json())
            .then(data => {
                const curScaleValue = data.find(item => item.Cur_DateStart.includes(dateInput))?.Cur_Scale;
                setCurScale(curScaleValue || 'Нет данных');
            })
            .catch(error => console.error('Ошибка при получении данных:', error));
    };

    return (
        <div className="container">
            <h2>Получить значение Cur_Scale по дате</h2>
            <label htmlFor="date">Введите дату (гггг-мм-дд):</label>
            <input
                type="text"
                id="date"
                placeholder="Например, 1991-01-01"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
            />
            <button onClick={getCurScale}>Смотреть</button>
            <div id="result">Cur_Scale на дату {dateInput}: {curScale}</div>
        </div>
    );
}

  
 

export default CurScaleComponent;