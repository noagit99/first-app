import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';

@Injectable()
export class DBService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;
  public dbClient: ReturnType<typeof drizzle>;

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

      console.log('Connected to PostgreSQL database successfully!');
      this.dbClient = drizzle(this.pool);
    } catch (error) {
      console.error('Failed to connect to PostgreSQL database:', error);
    }
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}