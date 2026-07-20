import React from 'react';
function App() {
  const officeSpaces = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
    { Name: 'Ozone', Rent: 60000, Address: 'Bangalore' }
  ];
  return (
    <div>
      <h1>Office Space Rental</h1>
      {officeSpaces.map((o, idx) => (
        <div key={idx} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
          <h3>Name: {o.Name}</h3>
          <p>Rent: Rs. {o.Rent}</p>
          <p>Address: {o.Address}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
