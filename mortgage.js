//https://www.fool.com/the-ascent/personal-finance/how-is-loan-amortization-schedule-calculated/
//https://www.bankrate.com/mortgages/prepaying-your-mortgage/

const totalMortgagePayment = (loanAmount, interestRate) => {
    let lengthOfMortgageInYears = 30;
    let yearlyPayments = 12;
    let lengthOfMortgageInMonths = lengthOfMortgageInYears * yearlyPayments
    const interestPercentage = interestRate/100;
    const monthlyInterestRate = interestPercentage/12;
    let monthlyRate = Math.pow((1+monthlyInterestRate), lengthOfMortgageInMonths);
    monthlyRate = (monthlyInterestRate * (monthlyRate))/(monthlyRate-1);
    const monthlyPayment = loanAmount * monthlyRate;

    // console.log("total interest payments: " + ((monthlyPayment * lengthOfMortgageInMonths) - loanAmount));
    // console.log("monthly payment: " + monthlyPayment);

    return monthlyPayment;
}

const calculateAmortization = (loanAmount, interestRate, extraYearlyPayment) => {
  const interestPercentage = interestRate/100;
  const monthlyPayment = totalMortgagePayment(loanAmount, interestRate);
  let principalBalance = loanAmount
  let paymentNumber = 0;
  let months = 360;

  while(principalBalance > 0){
    let interest = monthlyPayment - (principalBalance * interestPercentage)/12;
    // console.log("interestPayment: " + (monthlyPayment - interest))
    // console.log("amortization: " + (monthlyPayment - (monthlyPayment - interest)));
    months--;
    if(extraYearlyPayment && months % 12 == 0){
      principalBalance = principalBalance - interest;
      principalBalance = principalBalance - monthlyPayment;
    } else {
      principalBalance = principalBalance - interest;
    }
    paymentNumber++;
    principalBalance = principalBalance < 0 ? 0 : principalBalance;
    console.log("principalBalance: " + principalBalance);
  }

  return n;
}

// console.log(calculateAmortization(120000, 4.5));
// console.log(totalMortgagePayment(240000, 5));
