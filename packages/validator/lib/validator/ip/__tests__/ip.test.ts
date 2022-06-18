import { ValidatorIp } from '..';

describe('string ip test', () => {
  test('standard', () => {
    expect(ValidatorIp('192.168.2.1')).toBe(true);
  });

  test('non-standard', () => {
    expect(ValidatorIp('192.168.1.1/01')).toBe(false);
  });

  test('digit must between [0-255] control', () => {
    expect(ValidatorIp('19234.1683434.23434.3453453453')).toBe(false);
  });

  test('digit must between [0-255] control', () => {
    expect(ValidatorIp('256.256.256.256')).toBe(false);
  });

  test('must have 4 octets control', () => {
    expect(ValidatorIp('255')).toBe(false);
  });

  test('must have 4 octets control', () => {
    expect(ValidatorIp('123.123')).toBe(false);
  });

  test('must only digit control', () => {
    expect(ValidatorIp('sample')).toBe(false);
  });

  test('must only digit control', () => {
    expect(ValidatorIp('y.y.y.y')).toBe(false);
  });

  test('must only digit control', () => {
    expect(ValidatorIp('1FAHP26W49G252740')).toBe(false);
  });

  test('empty string', () => {
    expect(ValidatorIp('')).toBe(false);
  });

  test('null control', () => {
    expect(ValidatorIp(null)).not.toBeNull();
    expect(ValidatorIp(null)).toBe(false);
  });
});
