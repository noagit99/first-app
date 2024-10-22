import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import Login from './components/Login';
import Home from './components/Home';
import * as styles from './styles/styles.css';

// Create a client for React Query
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={styles.container}>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<UserComponent />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
