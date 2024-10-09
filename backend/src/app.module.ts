import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController, HelloController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [   ConfigModule.forRoot({
    isGlobal: true, // Makes the config available globally
  }),SharedModule],
  controllers: [HelloController, HealthController],
  providers: [AppService],
})
export class AppModule {}
