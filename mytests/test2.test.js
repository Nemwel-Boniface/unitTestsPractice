const { string } = require('prop-types');
const reverseString = require('./test2');

test('Check if the string equals its reversed self', () => {
  expect(reverseString('mocha')).toBe('ahcom');
})