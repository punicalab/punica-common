import { ConverterStringToBoolean } from '..';

describe('string to boolean converter', () => {
  test("'true' to boolean converter", () => {
    expect(ConverterStringToBoolean('true')).toEqual(true);
  });

  test("'1' to boolean converter", () => {
    expect(ConverterStringToBoolean('1')).toEqual(true);
  });

  test("'on' to boolean converter", () => {
    expect(ConverterStringToBoolean('on')).toEqual(true);
  });

  test("'yes' to boolean converter", () => {
    expect(ConverterStringToBoolean('yes')).toEqual(true);
  });

  test("'no' to boolean converter", () => {
    expect(ConverterStringToBoolean('no')).toEqual(false);
  });
});
