const { addNumbers, isEven } = require('./functions');

test('should fail on purpose', () => {
  expect(2 + 2).toBe(5);
});


test('isEven incorrectly expects 3 to be even', () => {
  expect(isEven(3)).toBe(false);
});
