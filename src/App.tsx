import React, { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [count, setCount] = useState(0);
  const name = 'dsds';
  return (
    <button className={styles.purple} onClick={() => setCount(count + 1)}>
      App {count}
    </button>
  );
}
