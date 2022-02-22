const { TestWatcher } = require('jest');
const capitalize = require('./test4');

test('Check whether first letter in string is a capital letter', () => {
  expect(capitalize('mocha')).toBe('Mocha');
})