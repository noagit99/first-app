// src/expense/expense.service.ts

import { Injectable } from '@nestjs/common';
import { ExpenseRepository } from './expenses.repository';
import { IExpense } from './expense.interface';

@Injectable()
export class ExpenseService {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async getAllExpenses() {
    return this.expenseRepository.getAllExpenses();
  }

  async getExpenseById(id: string) {
    return this.expenseRepository.getExpenseById(id);
  }

  async createExpense(expenseData: IExpense) {
    return this.expenseRepository.createExpense(expenseData);
  }

  async updateExpense(id: string, expenseData: IExpense) {
    return this.expenseRepository.updateExpense(id, expenseData);
  }

  async deleteExpense(id: string) {
    const result = await this.expenseRepository.deleteExpense(id);
    return result.length > 0; // Check if any rows were deleted
  }
}

