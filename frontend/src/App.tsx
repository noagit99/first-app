// src/App.tsx
import React from 'react';
import * as styles from './styles/styles.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Vite + React + TypeScript!</h1>
      <p>This is a simple example using Vanilla Extract for CSS-in-TypeScript.</p>
      <button className={styles.button}>Click Me!</button>
    </div>
  );
};

export default App;
