const { string } = require('prop-types');
const stringLength = require('./test1');

test('Check if string length matches the actual string length', () => {
  let str = stringLength(string);
  expect(stringLength('Jest')).not.toEqual(str);
});