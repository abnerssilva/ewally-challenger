import { HttpException } from '@nestjs/common';

export const tenModule = (
  array: number[],
  verificationDigit: number,
  fieldNumber?: number,
) => {
  const reducedValue = array.reduce(
    (previous: number, current: number, index: number) => {
      let result: number = current * 2;
      const zeroDivision: boolean = index % 2 === 0;

      if (!zeroDivision) {
        result = current * 1;
      }

      if (result > 9) {
        const resultStringfied = result.toString().split('');
        result = Number(resultStringfied[0]) + Number(resultStringfied[1]);
      }

      return previous + result;
    },
    0,
  );

  const tenDivisionRest = reducedValue % 10;

  let dac = 10 - tenDivisionRest;

  if (dac === 10) {
    dac = 0;
  }

  if (!fieldNumber && dac === Number(verificationDigit)) {
    return dac;
  } else if (!fieldNumber && dac !== Number(verificationDigit)) {
    throw new HttpException(
      {
        status: 400,
        message: `Dígito de verificação geral inválido. Certifique-se de ter digitado a linha digitável corretamente`,
        error: 'Bad request',
      },
      400,
    );
  }
  if (dac === Number(verificationDigit)) {
    return true;
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
