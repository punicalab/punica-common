import { IValidator } from '../IValidator';

/**
 * Validates if a string represents a valid email address.
 * @param {string} data The string to be validated, representing an email address.
 * @returns {boolean} True if the string represents a valid email address, otherwise false.
 * @example
 * // Returns true
 * const result1 = validateEmail('test@gmail.com');
 *
 * // Returns true
 * const result2 = validateEmail('test.test@gmail.com');
 *
 * // Returns false
 * const result3 = validateEmail('test@com');
 */
export const validateEmail: IValidator<string> = (data: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(data);
};
