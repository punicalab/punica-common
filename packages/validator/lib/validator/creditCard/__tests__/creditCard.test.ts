import { ValidatorCreditCard } from '..';

describe('credit card test', () => {
  test('standard control', () => {
    expect(ValidatorCreditCard('4242424242424242')).toEqual(false);
    expect(ValidatorCreditCard('111111111111111')).toEqual(false);
  });

  test('character length control', () => {
    expect('111').not.toHaveLength(16);
    expect('111').not.toHaveLength(15);
    expect(ValidatorCreditCard('111')).toEqual(false);
  });

  test('empty control', () => {
    expect(ValidatorCreditCard('')).toEqual(false);
  });

  test('null control', () => {
    expect(ValidatorCreditCard(null)).toEqual(false);
    expect(ValidatorCreditCard(null)).not.toBeNull();
  });
});
