import { SetCookie } from '.';

/**
 *
 * @param key
 */
export const DeleteCookie = (key: string) => {
  if (typeof globalThis !== 'undefined') {
    SetCookie(key, ';expires=Thu, 01 Jan 1970 00:00:01 GMT');
  }
};
