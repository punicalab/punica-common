import { ValidatorInstagramProfile } from '..';

describe('string instagram test', () => {
  test('"https://instagram.com/" control', () => {
    expect(
      ValidatorInstagramProfile('https://www.instagram.com/accountname/')
    ).toBeTruthy();
  });

  test('"http://instagram.com/" control', () => {
    expect(
      ValidatorInstagramProfile('http://www.instagram.com/accountname/')
    ).toBeTruthy();
  });

  test('"https://instagram.com" control', () => {
    expect(
      ValidatorInstagramProfile('https://www.instagram.com/accountname')
    ).toBeTruthy();
  });

  test('"http://instagram.com" control', () => {
    expect(
      ValidatorInstagramProfile('http://www.instagram.com/accountname')
    ).toBeTruthy();
  });

  test('"instagram.com" control', () => {
    expect(
      ValidatorInstagramProfile('instagram.com/accountname/')
    ).toBeTruthy();
  });

  test('empty string', () => {
    expect(ValidatorInstagramProfile('')).toBeFalsy();
  });
});
