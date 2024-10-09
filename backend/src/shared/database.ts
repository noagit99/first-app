import { Injectable, OnModuleInit, OnModuleDestroy, Scope } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

@Injectable()
export class DBService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    this.pool = new Pool({
      user: String(this.configService.get('DB_USER')),
      host: String(this.configService.get('DB_HOST')),
      database: String(this.configService.get('DB_NAME')),
      password: String(this.configService.get('DB_PASSWORD')),
      port: Number(this.configService.get('DB_PORT')),
    });
  
    try {
      await this.pool.connect();
      console.log('Connected to PostgreSQL database successfully!');
    } catch (error) {
      console.error('Failed to connect to PostgreSQL database:', error);
    }
  }

  getClient() {
    return this.pool.connect();
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}