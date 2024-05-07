import { IValidator } from '..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("abc")
 * @example
 * // returns true
 * Validator("aBc")
 * @example
 * // returns false
 * Validator("_!")
 * @returns { Boolean }
 */
export const ValidatorOnlyLowerCase: IValidator<string> = (
  data: string
): boolean => {
  // At least one alphabetical character is lower case
  if (data === null) return false;
  const reg = /^(?=.*[a-z]).*$/;
  return reg.test(data);
};
