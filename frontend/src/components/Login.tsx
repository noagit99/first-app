import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useUsers'; // Adjust the path as necessary
import { LoginData } from '../types/index.ts'; // Adjust the path as necessary
import * as styles from '../styles/styles.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous error

    const loginData: LoginData = { username, password };

    try {
      // Attempt login
      const response = await loginMutation.mutateAsync(loginData);

      // Only set the token and navigate if login is successful
      if (response && response.access_token) {
        localStorage.setItem('token', String(response.access_token)); // Store the token
        console.log(response.access_token);
        alert('Login successful'); // Show success message
        navigate('/home'); // Redirect to home on success
      }
    } catch (err: any) {
      console.error('Login error:', err); // Log the error for debugging

      // Check the structure of the error returned
      if (err.response) {
        // If error has a response from the server
        setError(err.response.data.message || 'Login failed'); // Set error message
      } else {
        setError('An unexpected error occurred'); // Handle unexpected errors
      }
      
      alert('Login failed: ' + (err.response?.data?.message || 'Invalid credentials')); // Show alert
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loginMutation.status === 'pending'} className={styles.button}>
          {loginMutation.status === 'pending' ? 'Loading...' : 'Login'}
        </button>
        {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
