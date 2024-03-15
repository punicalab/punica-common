import { ValidatorPhone, IPhoneOptions } from '..';

describe('ValidatorPhone', () => {
  it('should return true for valid phone numbers', () => {
    const validPhoneOptions: IPhoneOptions = {
      data: '+90 (212) 564 45 23'
    };
    expect(ValidatorPhone(validPhoneOptions)).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    const invalidPhoneOptions1: IPhoneOptions = {
      data: '+90(212)5644523'
    };
    const invalidPhoneOptions2: IPhoneOptions = {
      data: 'aaa'
    };
    expect(ValidatorPhone(invalidPhoneOptions1)).toBe(false);
    expect(ValidatorPhone(invalidPhoneOptions2)).toBe(false);
  });

  it('should return false if options parameter is null', () => {
    const nullPhoneOptions: IPhoneOptions = null;
    expect(ValidatorPhone(nullPhoneOptions)).toBe(false);
  });

  it('should return true for custom pattern', () => {
    const customPatternOptions: IPhoneOptions = {
      data: '+90 (212) 564 45 23',
      pattern: /^\+(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})$/
    };
    expect(ValidatorPhone(customPatternOptions)).toBe(true);
  });

  it('should return false for custom pattern with invalid phone number', () => {
    const customPatternOptions: IPhoneOptions = {
      data: '+90 (212) 564 45 23',
      pattern: /^\+(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})$/
    };
    expect(ValidatorPhone(customPatternOptions)).toBe(false);
  });
});
