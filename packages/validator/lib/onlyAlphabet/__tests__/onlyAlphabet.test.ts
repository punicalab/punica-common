import { validateOnlyAlphabet } from '..';

describe('validateOnlyAlphabet', () => {
  it('should return true for strings containing only alphabet characters', () => {
    expect(validateOnlyAlphabet('abc')).toBe(true);
    expect(validateOnlyAlphabet('ABC')).toBe(true);
    expect(validateOnlyAlphabet('abcABC')).toBe(true);
    expect(validateOnlyAlphabet('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    expect(validateOnlyAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true);
    expect(validateOnlyAlphabet('a b c')).toBe(false);
    expect(validateOnlyAlphabet('A B C')).toBe(false);
    expect(validateOnlyAlphabet(' ')).toBe(false);
  });

  it('should return false for strings containing non-alphabet characters', () => {
    expect(validateOnlyAlphabet('123')).toBe(false);
    expect(validateOnlyAlphabet('abc123')).toBe(false);
    expect(validateOnlyAlphabet('abc!')).toBe(false);
    expect(validateOnlyAlphabet('123 ')).toBe(false);
  });

  it('should return false for null or undefined inputs', () => {
    expect(validateOnlyAlphabet(null)).toBe(false);
    expect(validateOnlyAlphabet(undefined)).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    //@ts-ignore
    expect(validateOnlyAlphabet(123)).toBe(false);
    //@ts-ignore
    expect(validateOnlyAlphabet({})).toBe(false);
    //@ts-ignore
    expect(validateOnlyAlphabet([])).toBe(false);
  });
});
