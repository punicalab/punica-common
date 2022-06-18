import { ValidatorPhone } from '..';

describe('phone number test', () => {
  test('standard', () => {
    expect(ValidatorPhone({ data: '+90 (212) 564 45 23' })).toEqual(true);
  });

  test('non-standard', () => {
    expect(ValidatorPhone({ data: '+90(212)5644523' })).toEqual(false);
  });

  test('standard with pattern', () => {
    expect(
      ValidatorPhone({
        data: '+90(212)5644523',
        pattern: /^\+(\d{2})\((\d{3})\)(\d{3})(\d{2})(\d{2})/gm
      })
    ).toEqual(true);
  });

  test('standard with pattern', () => {
    expect(
      ValidatorPhone({
        data: '(123) 456-7890',
        pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      })
    ).toEqual(true);
  });

  test('non digit control', () => {
    expect(ValidatorPhone({ data: 'aaa' })).toEqual(false);
  });

  test('empty string control', () => {
    expect(ValidatorPhone({ data: '' })).toEqual(false);
  });

  test('null control', () => {
    expect(ValidatorPhone(null)).not.toBeNull();
    expect(ValidatorPhone(null)).toEqual(false);
  });
});
