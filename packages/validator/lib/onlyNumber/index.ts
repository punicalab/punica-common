/**
 * Validates if a string contains only numeric characters.
 * @param {string} data - The string to be validated.
 * @returns {boolean} True if the string contains only numeric characters, otherwise false.
 *
 * @example
 * // returns true
 * validateOnlyNumber('12345');
 * @example
 * // returns true
 * validateOnlyNumber(12345);
 * @example
 * // returns false
 * validateOnlyNumber('12a345');
 * @example
 * // returns true
 * validateOnlyNumber('0.123');
 */
export const validateOnlyNumber = (data: string): boolean => {
  const numericRegex = /^[+-]?([0-9]*[.])?[0-9]+$/;
  return numericRegex.test(data);
};
