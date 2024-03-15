import { doubleDigit } from '..';

describe('doubleDigit Function', () => {
  it('should convert single digit to double digit with leading zero', () => {
    expect(doubleDigit(1)).toBe('01');
  });

  it('should keep double digit number as is', () => {
    expect(doubleDigit(10)).toBe('10');
  });

  it('should convert single digit to double digit with leading zero', () => {
    expect(doubleDigit(5)).toBe('05');
  });
});
