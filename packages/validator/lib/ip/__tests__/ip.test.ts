import { validateIpAddress } from '..';

describe('validateIpAddress', () => {
  it('should return true for valid IP addresses', () => {
    expect(validateIpAddress('192.168.2.1')).toBe(true);
    expect(validateIpAddress('10.0.0.1')).toBe(true);
    expect(validateIpAddress('172.16.0.1')).toBe(true);
    expect(validateIpAddress('255.255.255.255')).toBe(true);
  });

  it('should return false for invalid IP addresses', () => {
    expect(validateIpAddress('19234.1683434.23434.3453453453')).toBe(false);
    expect(validateIpAddress('sample')).toBe(false);
    expect(validateIpAddress('192.168.2')).toBe(false);
    expect(validateIpAddress('192.168.2.')).toBe(false);
    expect(validateIpAddress('192.168.2.300')).toBe(false);
    expect(validateIpAddress('192.168.2.-1')).toBe(false);
    expect(validateIpAddress('')).toBe(false);
    expect(validateIpAddress(null)).toBe(false);
    expect(validateIpAddress(undefined)).toBe(false);
  });
});
