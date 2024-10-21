import React, { useState, useEffect } from 'react';
import { useExpenses, useCreateExpense, useUpdateExpense, useDeleteExpense } from '../hooks/useExpenses';
import { IExpense } from '../types/index';
import * as styles from '../styles/expenses.css';

const Home: React.FC = () => {
  const { data: expenses = [], isLoading, error, refetch } = useExpenses();
  const createExpenseMutation = useCreateExpense();
  const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);
  const updateExpenseMutation = useUpdateExpense(editingExpenseId || '');
  const deleteExpenseMutation = useDeleteExpense();
  const [formData, setFormData] = useState<IExpense>({ title: '', amount: 0, date: new Date() });

  useEffect(() => {
    if (
      createExpenseMutation.isSuccess || 
      updateExpenseMutation.isSuccess || 
      deleteExpenseMutation.isSuccess
    ) {
      setFormData({ title: '', amount: 0, date: new Date() });
      setEditingExpenseId(null);
      refetch(); // Refetch expenses after mutation
    }
  }, [
    createExpenseMutation.isSuccess,
    updateExpenseMutation.isSuccess,
    deleteExpenseMutation.isSuccess,
    refetch,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedAmount = Number(formData.amount);
    const formattedDate = new Date(formData.date);

    const payload = {
      title: formData.title,
      amount: formattedAmount,
      date: formattedDate,
    };

    if (editingExpenseId) {
      updateExpenseMutation.mutate(payload);
    } else {
      createExpenseMutation.mutate(payload);
    }
  };

  const handleEdit = (expense: IExpense) => {
    setFormData({
      title: expense.title,
      amount: expense.amount,
      date: new Date(expense.date),
    });
    setEditingExpenseId(expense.id || null);
  };

  const handleDelete = (id: string) => {
    deleteExpenseMutation.mutate(id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Expense Tracker</h1>
      {isLoading && <p>Loading expenses...</p>}
      {error && <p>Error fetching expenses: {error.message}</p>}
      <div className={styles.content}>
        <ul className={styles.expenseList}>
          {expenses.map((expense) => (
            <li key={expense.id} className={styles.expenseItem}>
              <span className={styles.expenseText}>
                {expense.title} - ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
              </span>
              <div>
                <button className={styles.editButton} onClick={() => handleEdit(expense)}>Edit</button>
                <button className={styles.deleteButton} onClick={() => expense.id && handleDelete(expense.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
            required
          />
          <input
            className={styles.input}
            type="date"
            value={formData.date.toISOString().split('T')[0]}
            onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value) })}
            required
          />
          <button className={styles.button} type="submit">
            {editingExpenseId ? 'Update Expense' : 'Add Expense'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
