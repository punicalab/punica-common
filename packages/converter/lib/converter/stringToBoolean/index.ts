import { IConverter } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Converter("true")
 * @example
 * // returns true
 * Converter("1")
 * @example
 * // returns true
 * Converter("on")
 * @example
 * // returns true
 * Converter("yes")
 * @example
 * // returns false
 * Converter("no")
 * @returns { Boolean }
 */
export const ConverterStringToBoolean: IConverter<string, boolean> = (data: string): boolean => {
  let value: boolean = null;
  switch (data) {
    case 'true':
    case '1':
    case 'on':
    case 'yes':
      value = true;
      break;
    default:
      value = false;
      break;
  }

  return value;
};
