import { setCookie } from '.';

/**
 *
 * @param key
 */
export const deleteCookie = (key: string) => {
  if (typeof globalThis !== 'undefined') {
    setCookie(key, ';expires=Thu, 01 Jan 1970 00:00:01 GMT');
  }
};
