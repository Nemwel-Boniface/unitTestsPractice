const { myCalculator, calculator } = require('./test3');

describe('My addition', () => {
  test('Check whether my addition function works', () => {
    expect(calculator.addition(20, 10)).toBe(30);
  });

  test('Check whether my addition function works', () => {
    expect(calculator.addition(10, 20)).toBe(30);
  });

  test('Check whether my addition function works', () => {
    expect(calculator.addition(10, 10)).not.toBe(20);
  });
});

describe('My subtraction', () => {
  test('Check whether my subtraction function works', () => {
    expect(calculator.substraction(10, 10)).not.toBe(0);
  });

  test('Check whether my subtraction function works', () => {
    expect(calculator.substraction(20, 10)).toBe(10);
  });

  test('Check whether my subtraction function works', () => {
    expect(calculator.substraction(10, 6)).not.toBe(4);
  });
});

describe('My Multiplication', () => {
  test('Check whether my Multiplication function works', () => {
    expect(calculator.multiplication(10, 10)).not.toBe(100);
  });

  test('Check whether my Multiplication function works', () => {
    expect(calculator.multiplication(20, 10)).toBe(200);
  });

  test('Check whether my Multiplication function works', () => {
    expect(calculator.multiplication(10, 6)).not.toBe(60);
  });
});

describe('My Divide function', () => {
  test('Check whether my Divide function works', () => {
    expect(calculator.division(20, 10)).toEqual(2);
  });

  test('Check whether my Divide function works', () => {
    expect(calculator.division(20, 10)).toEqual(2);
  });

  test('Check whether my Divide function works', () => {
    expect(calculator.division(100, 20)).not.toBe(5);
  });
});