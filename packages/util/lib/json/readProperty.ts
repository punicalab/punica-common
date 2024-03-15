/**
 * Reads a nested property from an object using a given property path.
 * @param {Object} entity - The object from which to read the property.
 * @param {string} propertyPath - The property path to read (e.g., 'property1/property2').
 * @returns {*} The value of the nested property, or undefined if not found.
 *
 * @example
 * const obj = {
 *   person: {
 *     name: 'John',
 *     age: 30,
 *     address: {
 *       city: 'New York',
 *       postalCode: '10001'
 *     }
 *   },
 *   arrayProp: [1, 2, 3]
 * };
 *
 * // Returns 'John'
 * readPropertyPath(obj, 'person/name');
 *
 * // Returns '10001'
 * readPropertyPath(obj, 'person/address/postalCode');
 *
 * // Returns 2
 * readPropertyPath(obj, 'arrayProp/1');
 */
export const readPropertyPath = (
  entity: { [key: string]: any },
  propertyPath: string
) => {
  const keys = propertyPath.split('/').filter(Boolean); // Filter out empty keys

  let value = entity;
  for (const key of keys) {
    if (value && typeof value === 'object') {
      if (Array.isArray(value) && /^\d+$/.test(key)) {
        // Check if key is an array index
        const index = parseInt(key);
        if (index < value.length) {
          value = value[index];
        } else {
          return undefined; // Invalid array index
        }
      } else if (key in value) {
        value = value[key];
      } else {
        return undefined; // Key does not exist
      }
    } else {
      return undefined; // Invalid value
    }
  }

  return value;
};
