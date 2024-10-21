import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET, 
        });
    }

    async validate(payload: any) {
        return this.userService.getUserByUsername(payload.username); // Ensure this method is implemented in UserService
    }
}
