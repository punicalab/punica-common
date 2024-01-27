/**
 *
 * @param key
 * @returns
 */
export const getCookie = (key: string, cookie: string = null): string => {
  let result;
  cookie = cookie || document.cookie;
  return (result = new RegExp(
    '(?:^|; )' + encodeURIComponent(key) + '=([^;]*)'
  ).exec(cookie))
    ? result[1]
    : null;
};
