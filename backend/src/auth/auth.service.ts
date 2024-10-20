// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async login(username: string, password: string): Promise<{ access_token: string }> {
        const user = await this.userService.login(username, password); // Use UserService to validate

        if (!user) {
            throw new UnauthorizedException('Invalid credentials'); // Handle invalid credentials
        }

        // Generate a JWT token
        const payload = { username: user.username, sub: user.id }; // Include user ID for JWT
        return {
            access_token: this.jwtService.sign(payload), // Return the JWT token
        };
    }
}


