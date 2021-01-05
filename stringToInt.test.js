const stringToInt = require('./stringToInt')

test('initial test', () => {
  expect(true).toBeTruthy()
})

test('throws error if no input', () => {
  expect(stringToInt).toThrow('No argument passed')
})

test('throw error if wrong input type', () => {
  expect(() => stringToInt(123)).toThrow('Invalid input type')
})

test('returns 0 if invalid input', () => {
  expect(stringToInt('asd-')).toBe(0)
})

test('returns int number', () => {
  expect(typeof stringToInt('123')).toBe('number')
})

test('returns int number for valid input', () => {
  expect(stringToInt('123')).toBe(123)
})

test('returns negative numbers also', () => {
  expect(stringToInt('-123')).toBe(-123)
})

test('returns number upto which it can read', () => {
  expect(stringToInt('123ab')).toBe(123)
})