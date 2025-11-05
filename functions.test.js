const { addNumbers, isEven } = require('./functions');

// ❌ This test will fail intentionally
test('should fail on purpose', () => {
  expect(2 + 2).toBe(5);
});

// ✅ This test will pass
test('isEven correctly identifies odd number', () => {
  expect(isEven(3)).toBe(false);
});

// ✅ Another passing test for addNumbers
test('addNumbers correctly adds two numbers', () => {
  expect(addNumbers(2, 3)).toBe(5);
});
