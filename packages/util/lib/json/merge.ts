/**
 *
 * @param obj1
 * @param obj2
 * @returns
 */
export const mergeObject = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
) => {
  obj1 = obj1 || {};
  obj2 = obj2 || {};

  for (const key of Object.keys(obj2)) {
    if (Array.isArray(obj2[key])) {
      obj2[key] = obj1[key].concat(obj2[key]);
    } else if (obj2[key] instanceof Object) {
      Object.assign(obj2[key], mergeObject(obj1[key], obj2[key]));
    }
  }

  Object.assign(obj1, obj2);

  return obj1;
};
