import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy'; // Import the JwtStrategy
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET, // Use environment variable
            signOptions: { expiresIn: '60s' }, // Adjust expiration as needed
        }),
        forwardRef(() => UserModule), // Resolve circular dependency
    ],
    providers: [AuthService, JwtStrategy], // Include JwtStrategy here
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
