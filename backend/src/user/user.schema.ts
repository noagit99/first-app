import { z } from 'zod';
import { pgTable, uuid, varchar, text } from 'drizzle-orm/pg-core';


export const UserSchema = z.object({
  id: z.string().optional(), // Marked as optional for creation
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type User = z.infer<typeof UserSchema>;


// Define Drizzle ORM Table

export const usersTable = pgTable('users', {
  id: varchar('id').primaryKey().$defaultFn(() => {
    return `${Math.random()}_${Math.random()}_${Date.now()}`;
  }),
  username: varchar('username', { length: 30 }).unique(),
  password: text('password'),
  email: varchar('email', { length: 255 }).unique(),
});