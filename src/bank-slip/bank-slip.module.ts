import { Module } from '@nestjs/common';
import { BankSlipService } from './bank-slip.service';
import { BankSlipController } from './bank-slip.controller';

@Module({
  controllers: [BankSlipController],
  providers: [BankSlipService],
})
export class BankSlipModule {}
