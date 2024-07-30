import React, { useState } from 'react';

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (<div>
  <h1>Простой счетчик</h1>
  <p>Текущее значение: {count}</p>
  <button onClick={increment}>Увеличить</button>
  <button onClick={reset}>Сбросить</button>
</div>)
};

export default  SimpleCounter;