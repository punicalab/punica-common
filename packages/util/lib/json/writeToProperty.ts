/**
 * Writes a value to a nested property of an object using a given property path.
 * @param {Object} entity - The object to write the property to.
 * @param {string} pathString - The property path to write to (e.g., 'property1/property2').
 * @param {*} value - The value to write to the property.
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
 * // Write a value to a nested property
 * writeToPropertyPath(obj, 'person/name', 'Alice');
 *
 * // Write a value to an array property
 * writeToPropertyPath(obj, 'arrayProp/1', 4);
 *
 * // Write a value to a new nested property
 * writeToPropertyPath(obj, 'person/lastName', 'Doe');
 *
 * // Write a value to a new array property
 * writeToPropertyPath(obj, 'newArray/0', 'Hello');
 */
export const writeToPropertyPath = (
  entity: { [key: string]: any },
  pathString: string,
  value: any
) => {
  // Split the property path into an array of keys
  const keys = pathString.split('/').filter(Boolean);

  // Start from the root object
  let currentObj = entity;

  // Traverse the property path
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      // When reaching the last key, assign the value to the property
      if (Array.isArray(currentObj) && /^\d+$/.test(key)) {
        // If the current object is an array and the key is a number, assign the value to the array index
        currentObj[parseInt(key)] = value;
      } else {
        // Otherwise, assign the value to the property
        currentObj[key] = value;
      }
    } else {
      // If the key is not the last one, navigate deeper into the object
      if (!(key in currentObj)) {
        // If the key is a number and the next key is also a number, create an array
        currentObj[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
      }
      currentObj = currentObj[key];
    }
  }
};
