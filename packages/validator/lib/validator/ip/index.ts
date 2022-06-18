import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("192.168.2.1")
 * @example
 * // returns false
 * Validator("19234.1683434.23434.3453453453")
 * @example
 * // returns false
 * Validator("sample")
 * @returns { Boolean }
 */
export const ValidatorIp: IValidator<string> = (data: string): boolean => {
  const reg =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

  return reg.test(data);
};
