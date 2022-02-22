const { string } = require('prop-types');
const stringLength = require('./test1');

test('Check if string length matches the actual string length', () => {
  let str = stringLength(string);
  expect(stringLength('test')).not.toEqual(str);
});

test('Check if the string length is too long or short', () => {
  let mylength = stringLength(string);
  expect(stringLength('test')).not.toBe(mylength);
})