class myCalculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }
  addition() {
    return this.number1 + this.number2;
  }
  substraction() {
    return this.number1 - this.number2;
  }
  multiplication() {
    return this.number1 * this.number2;
  }
  division() {
    return this.number1 / this.number2;
  }
};

const calculator = new myCalculator(20, 10);
// console.log(calculator.multiplication());

module.exports = { myCalculator, calculator };
