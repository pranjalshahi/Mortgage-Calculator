export const calcMortgage = (p, n, r) => {
  const numerator = r * Math.pow(1 + r, n);
  const denominator = Math.pow(1 + r, n) - 1;
  console.log((p * numerator) / denominator);
  return (p * numerator) / denominator;
};
