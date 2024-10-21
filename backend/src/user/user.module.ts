
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { SharedModule } from 'src/shared/shared.module';
import { DBService } from 'src/shared/database';

@Module({
  imports: [SharedModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, DBService],
  exports: [UserRepository,UserService],
})
export class UserModule {}
