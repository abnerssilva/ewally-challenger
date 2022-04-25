import { Controller, Get, Param } from '@nestjs/common';
import { BankSlipService } from './bank-slip.service';

@Controller('boleto')
export class BankSlipController {
  constructor(private readonly bankSlipService: BankSlipService) {}
  @Get(':digitableLine')
  getBankSlip(@Param('digitableLine') digitableLine: string) {
    return this.bankSlipService.getBankSlipData(digitableLine);
  }
}
