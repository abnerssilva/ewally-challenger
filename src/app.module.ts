import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankSlipModule } from './bank-slip/bank-slip.module';

@Module({
  imports: [BankSlipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
