import { IConverter } from '../IConverter';

/**
 * Converts bytes to a human-readable string representation.
 * @param {number} data The value in bytes to be converted.
 * @example
 * // Returns "1 MB"
 * convertBytes(1048576)
 * @returns {string} Returns the value in megabytes (MB).
 */
export const convertBytes: IConverter<number, string> = (
  data: number
): string => {
  if (data === 0) return `0 Bytes`;

  if (data < 0) return `Value must be positive`;

  const kilobyte = 1024;
  const decimalPlaces = 2;
  const byteSizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const index = Math.floor(Math.log(data) / Math.log(kilobyte));

  return `${parseFloat((data / Math.pow(kilobyte, index)).toFixed(decimalPlaces))} ${byteSizes[index]}`;
};
