import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("test@gmail.com")
 * @example
 * // returns true
 * Validator("test.test@gmail.com")
 * @example
 * // returns false
 * Validator("test@com")
 * @returns { Boolean }
 */
export const ValidatorEmail: IValidator<string> = (data: string): boolean => {
  /*eslint-disable */

  const regex =
    /^(([^ğüşıöçĞÜŞİÖÇ<>()\[\]\\.,;:\s@"]+(\.[^ğüşıöçĞÜŞİÖÇ<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(data);
};