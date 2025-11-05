const { addNumbers, isEven } = require('./functions');

test('addNumbers correctly adds two numbers', () => {
  expect(addNumbers(2, 3)).toBe(5); // ✅ passing test
});

test('isEven incorrectly expects 3 to be even', () => {
  expect(isEven(3)).toBe(false);
});
