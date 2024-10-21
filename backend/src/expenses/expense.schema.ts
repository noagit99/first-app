import { z } from 'zod';
import { pgTable, varchar,text, numeric, timestamp } from 'drizzle-orm/pg-core';

// Define the Zod schema for validation
export const ExpenseSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  amount: z.number().positive(),
  date: z.string() // Accept date as a string first
  .refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  })
  .transform((val) => new Date(val)), 
});

// Create TypeScript type from Zod schema
export type Expense = z.infer<typeof ExpenseSchema>;

// Define the expenses table using Drizzle ORM

export const expensesTable = pgTable('expenses', {
  id: varchar('id').primaryKey().$defaultFn(() => {
    return `${Math.random()}_${Math.random()}_${Date.now()}`;
  }),
  title: text('title').notNull(),
  amount: numeric('amount').notNull(),
  date: timestamp('date').notNull(),
});


