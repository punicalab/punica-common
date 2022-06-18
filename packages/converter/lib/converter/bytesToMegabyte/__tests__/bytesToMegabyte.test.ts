import { ConverterBytes } from '..';

describe('bytes to megabyte converter', () => {
  test('less than 0', () => {
    expect(ConverterBytes(-1)).toEqual('must be positive');
  });

  test('0 byte to O Bytes converter', () => {
    expect(ConverterBytes(0)).toEqual('0 Bytes');
  });

  test('1024 byte to 1 KB converter', () => {
    expect(ConverterBytes(1024)).toEqual('1 KB');
  });

  test('1024 * 1024 byte to 1 MB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 2))).toEqual('1 MB');
  });

  test('1024 * 1024 * 1024 byte to 1 GB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 3))).toEqual('1 GB');
  });

  test('1024 * 1024 * 1024 * 1024 byte to 1 TB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 4))).toEqual('1 TB');
  });

  test('1024 * 1024 * 1024 * 1024 * 1024 byte to 1 PB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 5))).toEqual('1 PB');
  });

  test('1024 * 1024 * 1024 * 1024 * 1024 * 1024 byte to 1 EB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 6))).toEqual('1 EB');
  });

  test('1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 byte to 1 ZB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 7))).toEqual('1 ZB');
  });

  test('1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 byte to 1 YB converter', () => {
    expect(ConverterBytes(Math.pow(1024, 8))).toEqual('1 YB');
  });
});
