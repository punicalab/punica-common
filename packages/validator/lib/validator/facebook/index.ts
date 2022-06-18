/* eslint-disable */
import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("https://www.facebook.com/")
 * @returns { Boolean }
 */
export const ValidatorFacebook: IValidator<string> = (
  data: string
): boolean => {
  const reg = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?/gm;

  return reg.test(data);
};
