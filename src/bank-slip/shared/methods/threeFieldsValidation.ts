import { fieldValidation } from '.';

export const threeFieldsValidation = (digitableLine: string) => {
  const fieldOne = digitableLine.slice(0, 9);
  const fieldTwo = digitableLine.slice(10, 20);
  const fieldThree = digitableLine.slice(21, 31);
  const fieldOneVerificationDigit = digitableLine[9];
  const fieldTwoVerificationDigit = digitableLine[20];
  const fieldThreeVerificationDigit = digitableLine[31];

  const module = 10;

  fieldValidation(fieldOne, fieldOneVerificationDigit, 1, module);
  fieldValidation(fieldTwo, fieldTwoVerificationDigit, 2, module);
  fieldValidation(fieldThree, fieldThreeVerificationDigit, 3, module);
};
