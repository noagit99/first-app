import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserComponent from './components/UserComponent';
import * as styles from './styles/styles.css';

// Create a client for React Query
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <h1 className={styles.header}>Welcome to Vite + React + TypeScript!</h1>
        <p>This is a simple example using Vanilla Extract for CSS-in-TypeScript.</p>
        <button className={styles.button}>Click Me!</button>
        <UserComponent/>
      </div>
    </QueryClientProvider>
  );
};

export default App;