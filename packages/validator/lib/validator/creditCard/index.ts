import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("4242424242424242")
 * @example
 * // returns true
 * Validator("378734493671000")
 * @example
 * // returns false
 * Validator("111")
 * @returns { Boolean }
 */
export const ValidatorCreditCard: IValidator<string> = (
  data: string
): boolean => {
  const reg = /^[0-9]{15,16}$/;

  if (!reg.test(data)) return false;

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    let intVal = parseInt(data.substring(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
};
