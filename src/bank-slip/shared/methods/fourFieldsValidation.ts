import { fieldValidation } from '.';

export const fourFieldsValidation = (digitableLine: string) => {
  const fieldOne = digitableLine.slice(0, 11);
  const fieldTwo = digitableLine.slice(12, 23);
  const fieldThree = digitableLine.slice(24, 35);
  const fieldFour = digitableLine.slice(36, 47);

  const fieldOneVerificationDigit = digitableLine.slice(11, 12);
  const fieldTwoVerificationDigit = digitableLine.slice(23, 24);
  const fieldThreeVerificationDigit = digitableLine.slice(35, 36);
  const fieldFourVerificationDigit = digitableLine.slice(47, 48);

  const currencyCode = Number(digitableLine[2]);

  const module = 11;

  fieldValidation(fieldOne, fieldOneVerificationDigit, 1, module, currencyCode);
  fieldValidation(fieldTwo, fieldTwoVerificationDigit, 2, module, currencyCode);
  fieldValidation(
    fieldThree,
    fieldThreeVerificationDigit,
    3,
    module,
    currencyCode,
  );
  fieldValidation(
    fieldFour,
    fieldFourVerificationDigit,
    4,
    module,
    currencyCode,
  );
};
