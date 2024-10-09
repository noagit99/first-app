import { Module } from '@nestjs/common';
import { HelloController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [AppService],
})
export class AppModule {}
