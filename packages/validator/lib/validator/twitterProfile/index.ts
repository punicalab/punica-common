/* eslint-disable */
import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("https://twitter.com/jamietanna/)
 * @returns { Boolean }
 */
export const ValidatorTwitterProfile: IValidator<string> = (
  data: string
): boolean => {
  const reg =
    /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
  return reg.test(data);
};
