import { Injectable } from '@nestjs/common';
import { BankSlip } from './entities/bank-slip.entity';
import {
  expirationDateValidation,
  barCodeValidation,
  getBarCode,
  getAmount,
  digitableLineValidation,
  threeFieldsValidation,
  fourFieldsValidation,
} from '../bank-slip/shared/methods';

@Injectable()
export class BankSlipService {
  async getBankSlipData(digitableLine: string): Promise<BankSlip> {
    let barCode;
    let billAmount;
    let expirationFactor;
    let billExpirationDate;
    let billType;
    const statusCode = 200;

    const digitableLineLength = digitableLineValidation(digitableLine);

    if (digitableLineLength === 47) {
      threeFieldsValidation(digitableLine);
      barCode = getBarCode(digitableLine, digitableLineLength);
      barCodeValidation(barCode, digitableLineLength);
      billAmount = getAmount(digitableLine, digitableLineLength);
      billType = 'Bank Slip';
      expirationFactor = barCode.slice(5, 9);
      const baseDate = new Date('10-07-1997');
      billExpirationDate = expirationDateValidation(
        baseDate,
        Number(expirationFactor),
      );

      const returnedObject: BankSlip = {
        status: statusCode,
        success: true,
        data: {
          amount: billAmount,
          type: billType,
          expirationDate: billExpirationDate,
          barcode: barCode,
        },
      };

      return returnedObject;
    } else if (digitableLineLength === 48) {
      fourFieldsValidation(digitableLine);
      barCode = getBarCode(digitableLine, digitableLineLength);
      barCodeValidation(barCode, digitableLineLength);
      billAmount = getAmount(barCode, digitableLineLength);
      billType = 'Consumption Bill';
      const expirationDateYear = barCode.slice(19, 23);
      const expirationDateMonth = barCode.slice(23, 25);
      const expirationDateDay = barCode.slice(25, 27);
      billExpirationDate = `${expirationDateYear}-${expirationDateMonth}-${expirationDateDay}`;
      const referenceMonthDate = new Date().getMonth() + 1;
      const referenceYearDate = new Date().getFullYear();

      if (
        referenceYearDate === Number(expirationDateYear) &&
        referenceMonthDate === referenceMonthDate
      ) {
        const returnedObject: BankSlip = {
          status: statusCode,
          success: true,
          data: {
            amount: billAmount,
            type: billType,
            expirationDate: billExpirationDate,
            barcode: barCode,
          },
        };
        return returnedObject;
      } else if (
        referenceYearDate === Number(expirationDateYear) &&
        referenceMonthDate === referenceMonthDate + 1
      ) {
        const returnedObject: BankSlip = {
          status: statusCode,
          success: true,
          data: {
            amount: billAmount,
            type: billType,
            expirationDate: billExpirationDate,
            barcode: barCode,
          },
        };
        return returnedObject;
      } else if (
        referenceYearDate === Number(expirationDateYear) &&
        referenceMonthDate === referenceMonthDate + 2
      ) {
        const returnedObject: BankSlip = {
          status: statusCode,
          success: true,
          data: {
            amount: billAmount,
            type: billType,
            expirationDate: billExpirationDate,
            barcode: barCode,
          },
        };
        return returnedObject;
      } else {
        const returnedObject: BankSlip = {
          status: statusCode,
          success: true,
          data: {
            amount: billAmount,
            type: billType,
            barcode: barCode,
          },
        };
        return returnedObject;
      }
    }
  }
}
