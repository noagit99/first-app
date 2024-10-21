import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ExpenseService } from './expenses.service'; // Adjust the import based on your file structure
import { IExpense } from './expense.interface'; // Adjust the import based on your file structure

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  async getAllExpenses() {
    try {
      return await this.expenseService.getAllExpenses();
    } catch (error) {
      throw new HttpException('Failed to retrieve expenses', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getExpenseById(@Param('id') id: string) {
    try {
      const expense = await this.expenseService.getExpenseById(id);
      if (!expense) {
        throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
      }
      return expense;
    } catch (error) {
      throw new HttpException('Failed to retrieve expense', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async createExpense(@Body() expenseData: IExpense) {
    try {
      return await this.expenseService.createExpense(expenseData);
    } catch (error) {
      throw new HttpException('Failed to create expense', HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async updateExpense(@Param('id') id: string, @Body() expenseData: IExpense) {
    try {
      const updatedExpense = await this.expenseService.updateExpense(id, expenseData);
      if (!updatedExpense) {
        throw new HttpException('Expense not found or failed to update', HttpStatus.NOT_FOUND);
      }
      return updatedExpense;
    } catch (error) {
      throw new HttpException('Failed to update expense', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteExpense(@Param('id') id: string) {
    try {
      const deleted = await this.expenseService.deleteExpense(id);
      if (!deleted) {
        throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
      }
      return { message: 'Expense deleted successfully' };
    } catch (error) {
      throw new HttpException('Failed to delete expense', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

