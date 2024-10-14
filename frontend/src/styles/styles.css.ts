import { style, globalStyle } from '@vanilla-extract/css';

// Global styles for html and body
globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#ffe6e6', // Light red background
  color: '#333',
  justifyContent: 'center',
  alignItems: 'flex-start', // Change to 'center' if needed
  minHeight: '100vh',
});

// Container styles
export const container = style({
  padding: '2rem', // Use rem for padding
  width: '90%',
  maxWidth: '800px',
  margin: '0 auto', // Center the container
  backgroundColor: '#ffffff', // White background for contrast
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  textAlign: 'center', // Centering text within the container
  display: 'flex', // Using flexbox for alignment
  flexDirection: 'column', // Align items vertically
  alignItems: 'center', // Center items horizontally
  transition: 'transform 0.3s',
  overflow: 'auto',

  // Hover effect
  ':hover': {
    transform: 'scale(1.02)',
  },
});

// Header styles
export const header = style({
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#c0392b', // Dark red for the header
});

// Paragraph styles
export const paragraph = style({
  fontSize: '1.2rem',
  marginBottom: '1rem',
  lineHeight: '1.5',
  textAlign: 'center', // Center text in the paragraph
});

// Button styles
export const button = style({
  padding: '0.75rem 1.5rem', // Use rem for padding
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#e74c3c', // Bright red for the button
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.3s',

  // Hover effects
  ':hover': {
    backgroundColor: '#c0392b', // Darker red on hover
    transform: 'scale(1.05)',
  },
});

// Media Queries for responsiveness
globalStyle('@media (max-width: 600px)', {
  [header]: {
    fontSize: '2rem', // Smaller font size for headers
  },
  [paragraph]: {
    fontSize: '1rem', // Smaller font size for paragraphs
  },
  [container]: {
    padding: '1rem', // Less padding on smaller screens
  },
  [button]: {
    padding: '0.5rem 1rem', // Smaller button padding
  },
});
