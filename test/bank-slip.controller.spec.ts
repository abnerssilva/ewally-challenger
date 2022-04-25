import { Test, TestingModule } from '@nestjs/testing';
import { BankSlipController } from '../src/bank-slip/bank-slip.controller';
import { BankSlipService } from '../src/bank-slip/bank-slip.service';

describe('BankSlipController', () => {
  let controller: BankSlipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankSlipController],
      providers: [BankSlipService],
    }).compile();

    controller = module.get<BankSlipController>(BankSlipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
