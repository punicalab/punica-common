/* eslint-disable */
import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("https://www.instagram.com/accountname/)
 * @returns { Boolean }
 */
export const ValidatorInstagramProfile: IValidator<string> = (
  data: string
): boolean => {
  const reg =
    /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;

  return reg.test(data);
};
