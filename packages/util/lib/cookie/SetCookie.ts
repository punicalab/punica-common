/**
 *
 * @param key
 * @param value
 */
export const SetCookie = (key: string, value: unknown) => {
  if (typeof globalThis !== 'undefined') {
    document.cookie = `${key}=${value}`;
  }
};
