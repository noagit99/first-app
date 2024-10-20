import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController, HelloController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [   ConfigModule.forRoot({
    isGlobal: true, // Makes the config available globally
  }),SharedModule, UserModule, AuthModule],
  controllers: [HelloController, HealthController],
  providers: [AppService],
})
export class AppModule {}