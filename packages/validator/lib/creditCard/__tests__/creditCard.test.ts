import { validateCreditCard } from '..';

describe('validateCreditCard', () => {
  it('should return true for valid credit card numbers', () => {
    expect(validateCreditCard('4242424242424242')).toBe(true);
    expect(validateCreditCard('378734493671000')).toBe(true);
  });

  it('should return false for invalid credit card numbers', () => {
    expect(validateCreditCard('111')).toBe(false);
    expect(validateCreditCard('1234567890123456')).toBe(false);
    expect(validateCreditCard('424242424242')).toBe(false);
    expect(validateCreditCard('3787344936710001')).toBe(false);
    expect(validateCreditCard('abc')).toBe(false);
    expect(validateCreditCard('')).toBe(false);
    expect(validateCreditCard(null)).toBe(false);
    expect(validateCreditCard(undefined)).toBe(false);
  });
});
