/**
 * Interface for defining a converter function.
 * This interface represents a function that takes input of type T and returns output of type R.
 * @template T The type of the input data.
 * @template R The type of the converted data.
 */
export interface IConverter<T, R> {
  /**
   * Converts input data of type T to output data of type R.
   * @param {T} data The input data to be converted.
   * @returns {R} The converted data.
   */
  (data: T): R;
}
