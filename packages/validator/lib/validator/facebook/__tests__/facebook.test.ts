import { ValidatorFacebook } from '..';

describe('string facebook test', () => {
  test('"https://facebook.com/" control', () => {
    expect(ValidatorFacebook('https://www.facebook.com/')).toBeTruthy();
    expect(
      ValidatorFacebook('https://www.facebook.com/accountname/')
    ).toBeTruthy();
  });

  test('"http://facebook.com/" control', () => {
    expect(ValidatorFacebook('http://www.facebook.com/')).toBeTruthy();
    expect(
      ValidatorFacebook('http://www.facebook.com/accountname/')
    ).toBeTruthy();
  });

  test('"https://facebook.com" control', () => {
    expect(ValidatorFacebook('https://www.facebook.com')).toBeTruthy();
    expect(
      ValidatorFacebook('https://www.facebook.com/accountname')
    ).toBeTruthy();
  });

  test('"http://facebook.com" control', () => {
    expect(ValidatorFacebook('http://www.facebook.com')).toBeTruthy();
    expect(
      ValidatorFacebook('http://www.facebook.com/accountname')
    ).toBeTruthy();
  });

  test('"facebook.com" control', () => {
    expect(ValidatorFacebook('facebook.com/')).toBeTruthy();
    expect(ValidatorFacebook('facebook.com/accountname/')).toBeTruthy();
  });

  test('empty string', () => {
    expect(ValidatorFacebook('')).toBeFalsy();
  });

  test('null control', () => {
    expect(ValidatorFacebook(null)).toBeFalsy();
    expect(ValidatorFacebook(null)).not.toBeNull();
  });
});
