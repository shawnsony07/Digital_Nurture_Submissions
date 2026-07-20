import React from 'react';
import styles from './CohortDetails.module.css';
function App() {
  return (
    <div className={styles.cohortBox}>
      <h2 style={{color: 'blue'}}>Cohort Details</h2>
      <p className={styles.cohortText}>Demonstrating CSS Modules and inline styles.</p>
    </div>
  );
}
export default App;
