import { ValidatorOnlyLowerCase } from '..';

describe('ValidatorOnlyLowerCase Function', () => {
  it('should return true for a string containing only numeric characters', () => {
    expect(ValidatorOnlyLowerCase('Aabcd')).toBe(true);
    expect(ValidatorOnlyLowerCase('0Abcd')).toBe(true);
    expect(ValidatorOnlyLowerCase('bcdsA')).toBe(true);
    expect(ValidatorOnlyLowerCase('12a345')).toBe(true);
  });

  it('should return false for a string containing non-numeric characters', () => {
    expect(ValidatorOnlyLowerCase('123133')).toBe(false);
    expect(ValidatorOnlyLowerCase('AA3213')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(ValidatorOnlyLowerCase('')).toBe(false);
  });
});
