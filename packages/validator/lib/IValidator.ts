/**
 * Represents a function that validates data.
 * @template T The type of the first parameter.
 */
export interface IValidator<T> {
  /**
   * Validates the given data.
   * @param {T} data The data to be validated.
   * @returns {boolean} True if the data is valid, otherwise false.
   */
  (data: T): boolean;
}
