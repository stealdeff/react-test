import React, { useState } from 'react';

export const  DateInput=()=> {
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="dateInput">Введите дату:</label>
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
  
 

export default  DateInput;