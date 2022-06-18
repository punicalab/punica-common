/* eslint-disable */
import { IValidator } from '../..';

/**
 *
 * @param { String } data
 * @example
 * // returns true
 * Validator("https://www.youtube.com/watch?v=h5tApqn6LaI)
 * @example
 * // returns true
 * Validator("http://www.youtube.com/embed/DFYRQ_zQ-gk")
 * @example
 * // returns true
 * Validator("youtu.be/cCnrX1w5luM")
 * @returns { Boolean }
 */
export const ValidatorYoutube: IValidator<string> = (data: string): boolean => {
  const reg =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  return reg.test(data);
};