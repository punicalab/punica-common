import { ValidatorTwitterProfile } from '..';

describe('string twitter test', () => {
  test('"https://twitter.com/" control', () => {
    expect(
      ValidatorTwitterProfile('https://twitter.com/jamietanna/')
    ).toBeTruthy();
    expect(
      ValidatorTwitterProfile('https://twitter.com/jamietanna/status/1/')
    ).toBeTruthy();
  });

  test('"http://twitter.com" control', () => {
    expect(
      ValidatorTwitterProfile('http://twitter.com/jamietanna')
    ).toBeTruthy();
    expect(
      ValidatorTwitterProfile('http://twitter.com/jamietanna/status/1')
    ).toBeTruthy();
  });

  test('"https://twitter.com" control', () => {
    expect(
      ValidatorTwitterProfile('https://twitter.com/jamietanna')
    ).toBeTruthy();
    expect(
      ValidatorTwitterProfile('https://twitter.com/jamietanna/status/1')
    ).toBeTruthy();
  });

  test('"http://twitter.com" control', () => {
    expect(
      ValidatorTwitterProfile('http://twitter.com/jamietanna')
    ).toBeTruthy();
    expect(
      ValidatorTwitterProfile('http://twitter.com/jamietanna/status/1')
    ).toBeTruthy();
  });

  test('"twitter.com" control', () => {
    expect(ValidatorTwitterProfile('twitter.com/jamietanna')).toBeTruthy();
    expect(
      ValidatorTwitterProfile('twitter.com/jamietanna/status/1')
    ).toBeTruthy();
  });

  test('empty string', () => {
    expect(ValidatorTwitterProfile('')).toBeFalsy();
  });

  test('null control', () => {
    expect(ValidatorTwitterProfile(null)).toBeFalsy();
    expect(ValidatorTwitterProfile(null)).not.toBeNull();
  });
});
