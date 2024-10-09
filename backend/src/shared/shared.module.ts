import { Module } from '@nestjs/common';
import { DBService } from './database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [DBService],
  exports: [DBService],
})
export class SharedModule {}