/**
 * Utility for generating GUID (Globally Unique Identifier).
 * It provides a method to generate a new UUID (Universally Unique Identifier).
 */
export const GUID: IGUID = {
  /**
   * Generates a new UUID (Universally Unique Identifier) in the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.
   * @returns {string} The generated UUID.
   */
  uuid: (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
};

/**
 * Interface for defining a GUID utility.
 */
export interface IGUID {
  /**
   * Generates a new UUID (Universally Unique Identifier).
   * @returns {string} The generated UUID.
   */
  uuid: () => string;
}
