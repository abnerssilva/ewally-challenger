export const getAmount = (value: string, type: number) => {
  let stringAmount;

  if (type === 47) {
    stringAmount = value.slice(38, 47);
  } else {
    stringAmount = value.slice(4, 15);
  }

  const numberAmount = Number(stringAmount);
  const amount = (numberAmount / 100).toFixed(2);

  return amount;
};
