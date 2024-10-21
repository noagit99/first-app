import { IExpense, Expense } from '../types/index';// Adjust the path as necessary
import { useApiQuery, useApiMutation } from './useApi';

// Fetch all expenses
export const useExpenses = () => {
  return useApiQuery<Expense[]>('/expenses'); // Path to fetch all expenses
};

// Fetch a specific expense by ID
export const useExpenseById = (expenseId: string) => {
  return useApiQuery<Expense>(`/expenses/${expenseId}`, !!expenseId); // Enable query only if expenseId is provided
};

// Create a new expense
export const useCreateExpense = () => {
  return useApiMutation<IExpense, Expense>('/expenses', 'POST'); // Path to create a new expense
};

// Update an existing expense
export const useUpdateExpense = (expenseId: string) => {
  return useApiMutation<Partial<IExpense>, Expense>(`/expenses/${expenseId}`, 'PUT');
};


// Delete an expense
export const useDeleteExpense = () => {
  return useApiMutation<string, void>('/expenses', 'DELETE'); // No need for expenseId here
};


  
