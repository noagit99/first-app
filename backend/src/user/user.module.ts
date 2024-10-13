
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { SharedModule } from 'src/shared/shared.module';
import { DBService } from 'src/shared/database';

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, DBService],
})
export class UserModule {}
