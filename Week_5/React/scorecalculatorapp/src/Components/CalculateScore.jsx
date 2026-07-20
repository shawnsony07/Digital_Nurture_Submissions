import React from 'react';
function CalculateScore({ Name, School, Total, Goal }) {
  return (
    <div className="student-score">
      <h1>Student Details:</h1>
      <div className="Name"><b>Name:</b> {Name} </div>
      <div className="School"><b>School:</b> {School} </div>
      <div className="Total"><b>Total:</b> {Total}</div>
      <div className="Score"><b>Score:</b> {Math.round(Total / Goal)}</div>
    </div>
  );
}
export default CalculateScore;
