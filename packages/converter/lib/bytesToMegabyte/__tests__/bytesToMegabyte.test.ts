import { convertBytes } from '..';

describe('convertBytes', () => {
  it('should return "0 Bytes" when input is 0', () => {
    expect(convertBytes(0)).toBe('0 Bytes');
  });

  it('should return "1 KB" when input is 1024', () => {
    expect(convertBytes(1024)).toBe('1 KB');
  });

  it('should return "1 MB" when input is 1048576', () => {
    expect(convertBytes(1048576)).toBe('1 MB');
  });

  it('should return "1 GB" when input is 1073741824', () => {
    expect(convertBytes(1073741824)).toBe('1 GB');
  });

  it('should return "1 TB" when input is 1099511627776', () => {
    expect(convertBytes(1099511627776)).toBe('1 TB');
  });

  it('should return "1 PB" when input is 1125899906842624', () => {
    expect(convertBytes(1125899906842624)).toBe('1 PB');
  });

  it('should return "1 EB" when input is 1152921504606846976', () => {
    expect(convertBytes(1152921504606846976)).toBe('1 EB');
  });

  it('should return "1 ZB" when input is 1180591620717411303424', () => {
    expect(convertBytes(1180591620717411303424)).toBe('1 ZB');
  });

  it('should return "1 YB" when input is 1208925819614629174706176', () => {
    expect(convertBytes(1208925819614629174706176)).toBe('1 YB');
  });

  it('should return "Value must be positive" when input is negative', () => {
    expect(convertBytes(-100)).toBe('Value must be positive');
  });
});
