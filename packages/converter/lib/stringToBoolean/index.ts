import { IConverter } from '..';

/**
 * Converts a string representation to a boolean value.
 * @param {string} data The string representation to convert to boolean.
 * @example
 * // Returns true
 * convertStringToBoolean("true")
 * @example
 * // Returns true
 * convertStringToBoolean("1")
 * @example
 * // Returns true
 * convertStringToBoolean("on")
 * @example
 * // Returns true
 * convertStringToBoolean("yes")
 * @example
 * // Returns false
 * convertStringToBoolean("no")
 * @returns {boolean} The converted boolean value.
 */
export const convertStringToBoolean: IConverter<string, boolean> = (
  data: string
): boolean => {
  let value: boolean = null;
  switch (data.toLowerCase()) {
    case 'true':
    case '1':
    case 'on':
    case 'yes':
      value = true;
      break;
    case 'false':
    case '0':
    case 'off':
    case 'no':
      value = false;
      break;
    default:
      value = null;
      break;
  }

  return value;
};
