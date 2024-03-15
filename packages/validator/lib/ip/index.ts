import { IValidator } from '..';

/**
 * Validates if a string represents a valid IP address.
 * @param {string} data The string to be validated, representing an IP address.
 * @returns {boolean} True if the string represents a valid IP address, otherwise false.
 * @example
 * // Returns true
 * const result1 = validateIpAddress('192.168.2.1');
 *
 * // Returns false
 * const result2 = validateIpAddress('19234.1683434.23434.3453453453');
 *
 * // Returns false
 * const result3 = validateIpAddress('sample');
 */
export const validateIpAddress: IValidator<string> = (
  data: string
): boolean => {
  const regExp =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regExp.test(data);
};
