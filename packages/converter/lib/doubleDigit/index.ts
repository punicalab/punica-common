import { IConverter } from '../IConverter';

/**
 * Converts a number to a double-digit string by adding leading zeros if necessary.
 * @param {number} data - The number to convert.
 * @returns {string} The double-digit string.
 *
 * @example
 * // returns '01'
 * doubleDigit(1);
 * @example
 * // returns '10'
 * doubleDigit(10);
 * @example
 * // returns '05'
 * doubleDigit(5);
 */
export const doubleDigit: IConverter<number, string> = (
  data: number
): string => {
  return `0${data}`.slice(-2);
};
