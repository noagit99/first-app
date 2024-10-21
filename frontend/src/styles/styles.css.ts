import { style, globalStyle } from '@vanilla-extract/css';

// Global styles for html and body
globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  colorScheme: 'light',
  backgroundColor: '#f3e8ff', // Light purple background
  color: '#333',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: '100vh',
});

// Input styles
globalStyle('input', {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #d1c4e9', // Light purple border
  marginBottom: '1rem',
  width: '100%',
  height: '40px',
  fontSize: '1rem',
  backgroundColor: 'rgba(241, 239, 247, 0.9)', // Slightly transparent light purple background
  color: '#333', // Dark text color
  transition: 'border-color 0.3s, box-shadow 0.3s',
  outline: 'none', // Remove default outline
  caretColor: '#6a5acd', // Cursor color (the caret)
});

// Focus state
globalStyle('input:focus', {
  borderColor: '#6a5acd', // Change border color to a darker purple
  boxShadow: '0 0 5px rgba(106, 90, 205, 0.5)', // Subtle purple shadow effect
});

// Placeholder styles
globalStyle('input::placeholder', {
  color: '#a89fc5', // Light gray for placeholder
  opacity: 1, // Ensure full opacity for better visibility
});

// Placeholder focus state
globalStyle('input:focus::placeholder', {
  color: '#c2b2e1', // Change placeholder color on focus for better visibility
});

// Global styles for form
globalStyle('form', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  justifyContent: 'center',
});

// Container styles
export const container = style({
  padding: '2rem',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Lighter shadow for softer effect
  textAlign: 'center',
  justifyContent: 'center',
});

// Header styles
export const header = style({
  fontSize: '2rem',
  marginBottom: '1rem',
  color: '#6a5acd', // Dark purple for the header
});

// Button styles
export const button = style({
  padding: '1rem 1.5rem',
  margin: '1rem 0',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#7b68ee', // Bright purple for the button
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  justifyContent: 'center',
  transition: 'background-color 0.3s, transform 0.3s',

  ':hover': {
    backgroundColor: '#6a5acd', // Darker purple on hover
    transform: 'scale(1.05)',
  },
});

// Error message styles
export const error = style({
  color: '#e74c3c', // Keep the error message in red
  marginTop: '1rem',
});


