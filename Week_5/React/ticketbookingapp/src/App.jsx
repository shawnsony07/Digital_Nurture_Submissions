import React, { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login (Currently: {isLoggedIn ? 'Logged In' : 'Guest'})
      </button>
      <hr/>
      {isLoggedIn ? (
        <div>
          <h2>Welcome User</h2>
          <form><label>Book tickets: <input type="number" min="1" /></label><button>Book</button></form>
        </div>
      ) : (
        <div>
          <h2>Welcome Guest</h2>
          <p>Please login to book tickets. Flight details: FL123 - Chennai to Delhi</p>
        </div>
      )}
    </div>
  );
}
export default App;
