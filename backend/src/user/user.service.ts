import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getCurrentUser(userId: string) {
    return await this.userRepository.getUserById(userId);
  }

  async getUserById(id: string) {
    try {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      console.error('Error in getUserById service:', error);
      throw new Error('Failed to fetch user');
    }
  }

  async createUser(userData: any) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = { ...userData, password: hashedPassword };
      return await this.userRepository.createUser(newUser);
    } catch (error) {
      console.error('Error in createUser service:', error);
      throw new Error('Failed to create user');
    }
  }

  async updateUser(id: string, userData: any) {
    try {
      // Check if the user exists before updating
      const userExists = await this.userRepository.getUserById(id);
      if (!userExists) {
        return null; // Indicate that the user wasn't found
      }

      // Proceed with the update
      const updatedUser = await this.userRepository.updateUser(id, userData);
      return updatedUser;
    } catch (error) {
      console.error('Error in updateUser service:', error);
      throw new Error('Failed to update user');
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.userRepository.getUserById(id); // Check if user exists
      if (!user) {
        return null; // Return null if user is not found
      }

      await this.userRepository.deleteUser(id); // Proceed to delete the user
      return user; // Return the deleted user
    } catch (error) {
      console.error('Error in deleteUser service:', error);
      throw new Error('Failed to delete user');
    }
  }

  async login(username: string, password: string) {
    const user = await this.userRepository.getUserByUsername(username);

    if (!user) {
      return null; // User not found or password does not match
    }

    // If passwords are hashed, use bcrypt to compare
    const isPasswordValid = await bcrypt.compare(password, user.password);

    return isPasswordValid ? user : null; // Return user if valid, otherwise null
  }
}
