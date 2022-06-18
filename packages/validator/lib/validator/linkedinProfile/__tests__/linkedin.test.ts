import { ValidatorLinkedin } from '..';

describe('string linkedin test', () => {
  test('"https://www.linkedin.com" control', () => {
    expect(
      ValidatorLinkedin('https://www.linkedin.com/in/username/')
    ).toBeTruthy();
    expect(
      ValidatorLinkedin('https://www.linkedin.com/company/name/')
    ).toBeTruthy();
  });

  test('"http://www.linkedin.com" control', () => {
    expect(
      ValidatorLinkedin('http://www.linkedin.com/in/username/')
    ).toBeTruthy();
    expect(
      ValidatorLinkedin('http://www.linkedin.com/company/name/')
    ).toBeTruthy();
  });

  test('"www.linkedin.com" control', () => {
    expect(ValidatorLinkedin('www.linkedin.com/in/username/')).toBeTruthy();
    expect(ValidatorLinkedin('www.linkedin.com/company/name/')).toBeTruthy();
  });

  test('"https://linkedin.com" control', () => {
    expect(
      ValidatorLinkedin('https://www.linkedin.com/in/username')
    ).toBeTruthy();
    expect(
      ValidatorLinkedin('https://www.linkedin.com/company/name')
    ).toBeTruthy();
  });

  test('"http://linkedin.com" control', () => {
    expect(
      ValidatorLinkedin('http://www.linkedin.com/in/username')
    ).toBeTruthy();
    expect(
      ValidatorLinkedin('http://www.linkedin.com/company/name')
    ).toBeTruthy();
  });

  test('"linkedin.com" control', () => {
    expect(ValidatorLinkedin('linkedin.com/in/username')).toBeTruthy();
    expect(ValidatorLinkedin('linkedin.com/company/name')).toBeTruthy();
  });

  test('empty string', () => {
    expect(ValidatorLinkedin('')).toBeFalsy();
  });

  test('null control', () => {
    expect(ValidatorLinkedin(null)).toBeFalsy();
    expect(ValidatorLinkedin(null)).not.toBeNull();
  });
});
