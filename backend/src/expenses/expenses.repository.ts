import { Injectable } from '@nestjs/common';
import { DBService } from '../shared/database'; 
import { ExpenseSchema, expensesTable } from './expense.schema'; 
import { eq } from 'drizzle-orm';

@Injectable()
export class ExpenseRepository {
  constructor(private readonly dbService: DBService) {}

  async getAllExpenses() {
    const result = await this.dbService.dbClient
      .select()
      .from(expensesTable)
      .execute();

    return result; // Return all expenses
  }

  async getExpenseById(id: string) {
    const result = await this.dbService.dbClient
      .select()
      .from(expensesTable)
      .where(eq(expensesTable.id, id)) // Use the table's id field
      .execute();

    return result[0] || null; // Return the first expense or null
  }

  async createExpense(expenseData: any) {
    const validatedExpense = ExpenseSchema.parse(expenseData); // Validate expense data
    const expenseToInsert = {
      date: validatedExpense.date, // Ensure date is included
      title: validatedExpense.title, // Ensure title is included
      amount: validatedExpense.amount.toString(), // Convert amount to string
    };
    const result = await this.dbService.dbClient
      .insert(expensesTable)
      .values(expenseToInsert)
      .returning();

    return result;
  }

  async updateExpense(id: string, expenseData: any) {
    const validatedExpense = ExpenseSchema.partial().parse(expenseData); // Allows partial updates
    const expenseToUpdate = {
      ...validatedExpense,
      amount: validatedExpense.amount?.toString(), // Convert amount to string if present
    };
    const result = await this.dbService.dbClient
      .update(expensesTable)
      .set(expenseToUpdate)
      .where(eq(expensesTable.id, id)) // Use the schema's id field
      .returning();

    return result;
  }

  async deleteExpense(id: string) {
    const result = await this.dbService.dbClient
      .delete(expensesTable)
      .where(eq(expensesTable.id, id)) // Use the schema's id field
      .returning();
    return result;
  }
}
