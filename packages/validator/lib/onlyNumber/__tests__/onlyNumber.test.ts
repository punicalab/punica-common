import { validateOnlyNumber } from '..';

describe('validateOnlyNumber Function', () => {
  it('should return true for a string containing only numeric characters', () => {
    expect(validateOnlyNumber('12345')).toBe(true);
    expect(validateOnlyNumber('0')).toBe(true);
    expect(validateOnlyNumber('9876543210')).toBe(true);
  });

  it('should return false for a string containing non-numeric characters', () => {
    expect(validateOnlyNumber('12a345')).toBe(false);
    expect(validateOnlyNumber('abc123')).toBe(false);
    expect(validateOnlyNumber('12 34')).toBe(false);
  });

  it('should return true for a string containing only a decimal number', () => {
    expect(validateOnlyNumber('0.123')).toBe(true);
    expect(validateOnlyNumber('3.14')).toBe(true);
    expect(validateOnlyNumber('.5')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(validateOnlyNumber('')).toBe(false);
  });
});
