import { validateEmail } from '..';

describe('validateEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(validateEmail('test@gmail.com')).toBe(true);
    expect(validateEmail('test.test@gmail.com')).toBe(true);
    expect(validateEmail('user@domain.com')).toBe(true);
    expect(validateEmail('user123@example.com')).toBe(true);
    expect(validateEmail('test123@test.co.uk')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(validateEmail('test@com')).toBe(false);
    expect(validateEmail('test@gmail')).toBe(false);
    expect(validateEmail('testgmail.com')).toBe(false);
    expect(validateEmail('user@.com')).toBe(false);
    expect(validateEmail('@gmail.com')).toBe(false);
    expect(validateEmail('')).toBe(false);
    expect(validateEmail(null)).toBe(false);
    expect(validateEmail(undefined)).toBe(false);
  });
});
