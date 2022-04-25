import { elevenModule, tenModule } from '.';
import { HttpException } from '@nestjs/common';

export const barCodeValidation = (code: string, type: number) => {
  let verificationDigit;

  if (type === 47) {
    const barCodeVerificationDigit = code[4];
    const barCode = code.slice(0, 4) + code.slice(5, 44);
    const barCodeDigitStringArray = Array.from(barCode);
    const barCodeDigitNumberArray = barCodeDigitStringArray.map(Number);

    const reverseNumberArray = barCodeDigitNumberArray.reverse();

    verificationDigit = elevenModule(reverseNumberArray);

    if (verificationDigit !== Number(barCodeVerificationDigit)) {
      throw new HttpException(
        {
          status: 400,
          message:
            'Dígito verificador do código de barras inválido. Certifique-se de ter digitado todos os números corretamente.',
          error: 'Bad request',
        },
        400,
      );
    }
  } else {
    const barCodeVerificationDigit = Number(code[3]);

    const barCode = code.slice(0, 3) + code.slice(4, 44);

    const barCodeDigitStringArray = Array.from(barCode);
    const barCodeDigitNumberArray = barCodeDigitStringArray.map(Number);
    const reverseNumberArray = barCodeDigitNumberArray.reverse();
    tenModule(reverseNumberArray, barCodeVerificationDigit);
  }

  return true;
};
