import { HttpException } from '@nestjs/common';

export const digitableLineValidation = (digitableLine: string): number => {
  const regexExpression = /^\d+$/;

  const numbersOnlyValidation = regexExpression.test(digitableLine);

  if (!numbersOnlyValidation) {
    throw new HttpException(
      {
        status: 400,
        message: 'ATENÇÃO: Certifique-se de digitar apenas números',
        error: 'Bad request',
      },
      400,
    );
  }

  const bankSlip = digitableLine.length;

  if (bankSlip < 47 || bankSlip > 48) {
    throw new HttpException(
      {
        status: 400,
        message: `ATENÇÃO: Você digitou ${bankSlip} números, certifique-se de prover 47 dígitos para Boletos Bancários ou 48 dígitos para Contas de Consumo.`,
        error: 'Bad request',
      },
      400,
    );
  }

  return bankSlip;
};
