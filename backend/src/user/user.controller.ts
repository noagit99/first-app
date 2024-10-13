// src/user/user.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id') // GET user by ID
  async getUserById(@Param('id') id: string) {
    try {
      const user = await this.userService.getUserById(id);

      if (!user) {
        return {
          status: 404,
          message: 'User not found',
        };
      }
      return {
        status: 200,
        user,
      };
    } catch (error) {
      console.error('Error fetching user:', error);
      return {
        status: 500,
        message: 'Failed to fetch user',
        error: error.message,
      };
    }
  }

  @Post() // Create a new user
  async createUser(@Body() userData: any) {
    try {
      const newUser = await this.userService.createUser(userData);
      return {
        status: 201,
        message: 'User created successfully',
        user: newUser,
      };
    } catch (error) {
      console.error('Error creating user:', error);
      return {
        status: 500,
        message: 'Failed to create user',
        error: error.message,
      };
    }
  }

  @Patch(':id') // Update user by ID
  async updateUser(@Param('id') id: string, @Body() userData: any) {
    try {
      const updatedUser = await this.userService.updateUser(id, userData);

      if (!updatedUser) {
        throw new Error('User not found');
      }

      return {
        status: 200,
        message: 'User updated successfully',
        user: updatedUser,
      };
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  }

  @Delete(':id') // Delete user by ID
  async deleteUser(@Param('id') id: string) {
    try {
      const deletedUser = await this.userService.deleteUser(id);

      if (!deletedUser) {
        return {
          status: 404,
          message: 'User not found',
        };
      }
      return {
        status: 200,
        message: 'User deleted successfully',
        user: deletedUser,
      };
    } catch (error) {
      console.error('Error deleting user:', error);
      return {
        status: 500,
        message: 'Failed to delete user',
        error: error.message,
      };
    }
  }

  @Post('login')
  async login(@Body() loginData: { username: string; password: string }) {
    const user = await this.userService.login(
      loginData.username,
      loginData.password,
    );
    console.log(user);

    if (!user) {
      throw new Error('Invalid credentials'); // Handle invalid credentials
    }
    return { message: 'Login successful', user }; // Return success message and user data
  }
}
