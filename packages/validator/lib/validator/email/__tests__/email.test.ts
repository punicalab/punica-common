import { ValidatorEmail } from '..';

describe('string email test', () => {
  test('standard mail', () => {
    expect(ValidatorEmail('test@gmail.com')).toEqual(true);
    expect(ValidatorEmail('test.123@outlook.com')).toEqual(true);
    expect(ValidatorEmail('test.test@gmail.com')).toEqual(true);
  });

  test('non-standard mail', () => {
    expect(ValidatorEmail('test@com')).toEqual(false);
  });

  test('@ is not present', () => {
    expect(ValidatorEmail('test.gmail.com')).toEqual(false);
  });

  test('tld cant start with dot', () => {
    expect(ValidatorEmail('test@.gmail.com')).toEqual(false);
  });

  test('no character before @', () => {
    expect(ValidatorEmail('@gmail.com')).toEqual(false);
  });

  test('.x is not a valid tld', () => {
    expect(ValidatorEmail('test@gmail.x')).toEqual(false);
  });

  test('email should not be start with "."', () => {
    expect(ValidatorEmail('.test@gmail.com')).toEqual(false);
  });

  test('include special character control', () => {
    expect(ValidatorEmail('test()*@gmail.com')).toEqual(false);
  });

  test('consecutive double dots control', () => {
    expect(ValidatorEmail('test..test@gmail.com')).toEqual(false);
  });

  test('empty string', () => {
    expect(ValidatorEmail('')).toEqual(false);
  });

  test('null control', () => {
    expect(ValidatorEmail(null)).toEqual(false);
    expect(ValidatorEmail(null)).not.toBeNull();
  });
});
