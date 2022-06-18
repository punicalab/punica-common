import { IConverter } from '../..';

/**
 *
 * @param { Number } data
 * @example
 * // returns 1MB
 * Converter(1048576)
 * @returns { String } Returns the value mb of bytes.
 */
export const ConverterBytes: IConverter<number, string> = (
  data: number
): string => {
  if (data === 0) return `0 Bytes`;

  if (data < 0) return `must be positive`;

  const k = 1024;
  const dm = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(data) / Math.log(k));

  return `${parseFloat((data / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
