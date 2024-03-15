import { IValidator } from '../IValidator';

/**
 * Validates if a string contains only alphabet characters.
 * @param {string} data The string to be validated.
 * @returns {boolean} True if the string contains only alphabet characters, otherwise false.
 * @example
 * // Returns true
 * const result1 = validateOnlyAlphabet("abc");
 *
 * // Returns false
 * const result2 = validateOnlyAlphabet("123");
 *
 * // Returns false
 * const result3 = validateOnlyAlphabet("_!");
 */
export const validateOnlyAlphabet: IValidator<string> = (
  data: string
): boolean => {
  const regExp = /^[A-Za-z]+$/;
  return typeof data === 'string' && regExp.test(data);
};
