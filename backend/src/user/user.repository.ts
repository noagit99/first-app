// src/user/user.repository.ts
import { Injectable } from '@nestjs/common';
import { DBService } from '../shared/database'; // Adjust the import based on your file structure
import { usersTable } from './user.schema'; // Ensure this imports your table schema correctly
import { UserSchema } from './user.schema'; // Assuming you have a Zod schema for validation
import { eq } from 'drizzle-orm';

@Injectable()
export class UserRepository {
  constructor(private readonly dbService: DBService) {}

  async getUserById(id: string) {
    const result = await this.dbService.dbClient
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id)) // Ensure correct condition method
      .execute();

    return result[0] || null; // Return the first user or null
  }

  async createUser(userData: any) {
    const validatedUser = UserSchema.parse({ ...userData}); // Validate user data and ensure id is included
    const result = await this.dbService.dbClient
      .insert(usersTable)
      .values(validatedUser)
      .returning();
    return result;
  }

  async updateUser(id: string, userData: any) {
    const validatedUser = UserSchema.partial().parse(userData); // Allows partial updates
    const result = await this.dbService.dbClient
      .update(usersTable)
      .set(validatedUser)
      .where(eq(usersTable.id, id)) // Adjusted for the correct method
      .returning();
    return result;
  }

  async deleteUser(id: string) {
    const result = await this.dbService.dbClient
      .delete(usersTable)
      .where(eq(usersTable.id, id)) // Ensure correct condition method
      .returning();
    return result;
  }

  async getUserByUsername(username: string) {
    const result = await this.dbService.dbClient
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username))
      .execute();

    return result[0] || null; // Return the first user or null
  }
}

