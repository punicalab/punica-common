/**
 *
 * @param key
 * @param value
 */
export const setCookie = (key: string, value: unknown) => {
  if (typeof globalThis !== 'undefined') {
    document.cookie = `${key}=${value}`;
  }
};
