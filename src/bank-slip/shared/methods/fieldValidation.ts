import { elevenModule, tenModule } from '.';

export const fieldValidation = (
  field: string,
  verificationDigit: string,
  fieldNumber: number,
  module: number,
  currencyCode?: number,
) => {
  const toArray = Array.from(field);
  const numberArray = toArray.map(Number);
  const reverseArray = numberArray.reverse();

  if (module === 10 || currencyCode === 6 || currencyCode === 7) {
    tenModule(reverseArray, Number(verificationDigit), fieldNumber);
  } else {
    elevenModule(reverseArray, Number(verificationDigit), fieldNumber);
  }

  return true;
};
