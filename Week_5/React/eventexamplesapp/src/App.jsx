import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => { setCount(count + 1); console.log("Incremented"); };
  const handleDecrement = () => setCount(count - 1);
  const sayWelcome = (msg) => alert(msg);
  
  return (
    <div>
      <h2>Event Examples</h2>
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>
        <button onClick={(e) => alert('I was clicked: ' + e.type)}>OnPress</button>
      </div>
      <CurrencyConvertor />
    </div>
  );
}
export default App;
