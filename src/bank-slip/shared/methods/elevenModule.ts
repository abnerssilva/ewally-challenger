import { HttpException } from '@nestjs/common';

export const elevenModule = (
  listNumber: number[],
  verificationDigit?: number,
  fieldNumber?: number,
) => {
  let counter = 2;

  const reducedValue = listNumber.reduce((prev: number, current: number) => {
    const multipliedAmount = current * counter;

    if (counter === 9) {
      counter = 2;
    } else {
      counter++;
    }

    return multipliedAmount + prev;
  });

  const modulus = reducedValue % 11;

  let dac = 11 - modulus;

  if (dac === 0 || dac === 10 || dac === 11) {
    dac = 1;
  }

  if (!verificationDigit && dac) {
    return dac;
  }

  if (verificationDigit && dac === Number(verificationDigit)) {
    return dac;
  } else {
    throw new HttpException(
      {
        status: 400,
        message: `Dígito de verificação do campo ${fieldNumber} inválido.`,
        error: 'Bad request',
      },
      400,
    );
  }
};
