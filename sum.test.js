const sum = require('./sum');

test('Property adds two numbers', () => {
  expect(sum(1,2)).toBe(3);
});