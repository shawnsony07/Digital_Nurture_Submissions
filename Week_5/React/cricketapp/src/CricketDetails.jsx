import React from 'react';
const players = [
  { name: 'Virat Kohli', score: 102 },
  { name: 'Rohit Sharma', score: 85 }
];
class CricketDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Cricket Match Details</h2>
        <ul>
          {players.map((p, idx) => <li key={idx}>{p.name} - {p.score}</li>)}
        </ul>
      </div>
    );
  }
}
export default CricketDetails;
