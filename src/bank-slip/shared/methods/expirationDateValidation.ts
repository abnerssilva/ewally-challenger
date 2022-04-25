export const expirationDateValidation = (date: Date, days: number): string => {
  date.setDate(date.getDate() + days);

  const stringfiedDate = JSON.stringify(date);
  const splitedDate = stringfiedDate.split('T');

  const validatedDate = splitedDate[0].slice(1, 11);

  return validatedDate;
};
