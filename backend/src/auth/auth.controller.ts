// src/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../user/dto/create-user.dto'; // Your Zod DTO
import { ZodError } from 'zod';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: any) { // Use 'any' temporarily
        try {
            // Validate the input using Zod
            LoginDto.parse(loginDto);
        } catch (error) {
            if (error instanceof ZodError) {
                throw new BadRequestException(error.errors);
            }
            throw error;
        }

        const token = await this.authService.login(loginDto.username, loginDto.password);
        console.log('Generated JWT:', token); // Log the JWT
        return { access_token: token }; // Return the token in the response
    }
}
