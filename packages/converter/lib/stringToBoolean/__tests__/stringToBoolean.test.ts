import { convertStringToBoolean } from '..';

describe('convertStringToBoolean', () => {
  it('should return true for "true"', () => {
    expect(convertStringToBoolean('true')).toBe(true);
  });

  it('should return true for "1"', () => {
    expect(convertStringToBoolean('1')).toBe(true);
  });

  it('should return true for "on"', () => {
    expect(convertStringToBoolean('on')).toBe(true);
  });

  it('should return true for "yes"', () => {
    expect(convertStringToBoolean('yes')).toBe(true);
  });

  it('should return false for "false"', () => {
    expect(convertStringToBoolean('false')).toBe(false);
  });

  it('should return false for "0"', () => {
    expect(convertStringToBoolean('0')).toBe(false);
  });

  it('should return false for "off"', () => {
    expect(convertStringToBoolean('off')).toBe(false);
  });

  it('should return false for "no"', () => {
    expect(convertStringToBoolean('no')).toBe(false);
  });

  it('should return null for unknown input', () => {
    expect(convertStringToBoolean('unknown')).toBeNull();
  });
});
