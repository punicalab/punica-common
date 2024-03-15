/**
 * Merges two objects recursively.
 * @param {Object} obj1 - The first object to merge.
 * @param {Object} obj2 - The second object to merge.
 * @returns {Object} The merged object.
 *
 * @example
 * // returns { a: 1, b: { c: [3, 4] }, d: 2 }
 * mergeObject({ a: 1, b: { c: [1, 2] } }, { b: { c: [3, 4] }, d: 2 });
 */
export const mergeObject = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
) => {
  obj1 = obj1 || {};
  obj2 = obj2 || {};

  for (const key of Object.keys(obj2)) {
    if (Array.isArray(obj2[key])) {
      if (Array.isArray(obj1[key])) {
        obj2[key] = obj1[key].concat(obj2[key]);
      }
    } else if (obj2[key] instanceof Object) {
      Object.assign(obj2[key], mergeObject(obj1[key], obj2[key]));
    }
  }

  Object.assign(obj1, obj2);

  return obj1;
};
