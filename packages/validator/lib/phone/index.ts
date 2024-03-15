import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("+90 (212) 564 45 23")
 * @example
 * // returns false
 * Validator("+90(212)5644523")
 * @example
 * // returns false
 * Validator("aaa")
 * @returns { Boolean }
 */
export const ValidatorPhone: IValidator<IPhoneOptions> = (
  o: IPhoneOptions
): boolean => {
  if (o === null) return false;

  let regex = o.pattern;

  if (!regex) {
    regex = /^\+(\d{2})\s\((\d{3})\)\s(\d{3})\s(\d{2})\s(\d{2})/gm;
  }

  return regex.test(o.data);
};

export interface IPhoneOptions {
  data: string;
  pattern?: RegExp;
}
