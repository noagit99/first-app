import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DBService } from './shared/database';

@Controller('hello')
export class HelloController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('health')
export class HealthController {
  @Get('check')
  check(): { status: string } {
    return { status: 'OK' };
  }
}
