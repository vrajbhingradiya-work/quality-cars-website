export const emiCalculatorFunction = (price: any) => {
  const annualInterestRate = 9.9;
  const termPeriod = 60;

  const downPayment = 0.2 * price;

  const principal = price - downPayment;
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numPayments = termPeriod;

  if (principal > 0 && monthlyInterestRate > 0 && numPayments > 0) {
    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numPayments)) /
      (Math.pow(1 + monthlyInterestRate, numPayments) - 1);

    const totalRepayment = emi * numPayments;
    const totalInterest = totalRepayment - principal;

    return Math.round(emi);
  }
  return 0;
};
