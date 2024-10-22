import { Module } from '@nestjs/common';
import { ExpenseController } from './expenses.controller';
import { ExpenseService } from './expenses.service';
import { ExpenseRepository } from './expenses.repository';
import { DBService } from '../shared/database'; // Adjust as necessary

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService, ExpenseRepository, DBService],
})
export class ExpenseModule {}
