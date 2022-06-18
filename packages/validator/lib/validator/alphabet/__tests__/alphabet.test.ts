import { ValidatorOnlyAlphabet } from '..';

describe('string alphabetical test', () => {
  test('alphabetical string', () => {
    expect(ValidatorOnlyAlphabet('abc')).toEqual(true);
  });

  test('numerical string', () => {
    expect(ValidatorOnlyAlphabet('123')).toEqual(false);
  });

  test('different string', () => {
    expect(ValidatorOnlyAlphabet('_!')).toEqual(false);
    expect(ValidatorOnlyAlphabet('.')).toEqual(false);
  });

  test('mixed character', () => {
    expect(ValidatorOnlyAlphabet('şğü123')).toEqual(false);
  });

  test('empty string', () => {
    expect(ValidatorOnlyAlphabet('')).toEqual(false);
  });

  test('null control', () => {
    expect(ValidatorOnlyAlphabet(null)).toEqual(false);
    expect(ValidatorOnlyAlphabet(null)).not.toBeNull();
  });
});
