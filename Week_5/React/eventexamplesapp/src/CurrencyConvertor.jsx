import React, { useState } from 'react';
function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);
  
  const convert = () => { setEuro((parseFloat(inr) * 0.011).toFixed(2)); };
  
  return (
    <div style={{marginTop: '20px'}}>
      <h3>Currency Convertor</h3>
      <input type="number" value={inr} onChange={(e) => setInr(e.target.value)} placeholder="Amount in INR" />
      <button onClick={convert}>Convert</button>
      {euro && <p>Euro: {euro}</p>}
    </div>
  );
}
export default CurrencyConvertor;
