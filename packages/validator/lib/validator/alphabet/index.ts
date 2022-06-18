import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("abc")
 * @example
 * // returns false
 * Validator("123")
 * @example
 * // returns false
 * Validator("_!")
 * @returns { Boolean }
 */
export const ValidatorOnlyAlphabet: IValidator<string> = (
  data: string
): boolean => {
  const reg = /^[ A-Za-z]+$/i;
  if (data === null) return false;
  return reg.test(data);
};
