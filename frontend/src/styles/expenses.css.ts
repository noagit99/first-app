import { style } from '@vanilla-extract/css';

export const container = style({
  width: '500px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f3e5f5', // Light purple background
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

export const header = style({
  fontSize: '2rem',
  marginBottom: '20px',
  textAlign: 'center',
  color: '#6a1b9a', // Dark purple color
});

export const content = style({
  display: 'flex',
  gap: '20px',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '300px',
});

export const input = style({
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
  transition: 'border-color 0.3s',
  ':focus': {
    borderColor: '#6a1b9a', // Dark purple focus border
    outline: 'none',
  },
});

export const button = style({
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#9c27b0', // Medium purple background
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
  ':hover': {
    backgroundColor: '#7b1fa2', // Darker purple on hover
  },
});

export const expenseList = style({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  flexGrow: 1,
  overflowY: 'auto',
  maxHeight: '400px',
  width: '100%',
});

export const expenseItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #eee',
  backgroundColor: '#e1bee7', // Light purple for each item
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#d1c4e9', // Slightly darker on hover
  },
});

export const expenseText = style({
  flexGrow: 1,
  color: '#4a148c', // Dark purple for text
});

export const editButton = style({
  marginLeft: '10px',
  backgroundColor: '#ab47bc', // Lighter purple for edit button
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#9c27b0', // Darker purple on hover
  },
});

export const deleteButton = style({
  backgroundColor: '#e91e63', // Pink for delete button
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#d81b60', // Darker pink on hover
  },
});
