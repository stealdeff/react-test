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
  
  
 

export default  DateInput;