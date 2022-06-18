/* eslint-disable */
import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("https://www.linkedin.com/in/username/)
 * @returns { Boolean }
 */
export const ValidatorLinkedin: IValidator<string> = (
  data: string
): boolean => {
  const reg =
    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)/gm;
  return reg.test(data);
};
