import { mergeObject, readPropertyPath, writeToPropertyPath } from '..';

describe('mergeObject', () => {
  it('should merge two objects recursively', () => {
    const obj1 = { a: 1, b: { c: [1, 2] } };
    const obj2 = { b: { c: [3, 4] }, d: 2 };
    const expectedResult = { a: 1, b: { c: [1, 2, 3, 4] }, d: 2 };

    expect(mergeObject(obj1, obj2)).toEqual(expectedResult);
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1, b: { c: [1, 2] } };

    expect(mergeObject(obj1, obj2)).toEqual(obj2);
    expect(mergeObject(obj2, obj1)).toEqual(obj2);
  });

  it('should handle arrays correctly', () => {
    const obj1 = { a: [1, 2], b: { c: [1, 2] } };
    const obj2 = { a: [3, 4], b: { c: [3, 4] } };
    const expectedResult = { a: [1, 2, 3, 4], b: { c: [1, 2, 3, 4] } };

    expect(mergeObject(obj1, obj2)).toEqual(expectedResult);
  });

  it('should merge deeply nested objects correctly', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { d: 2 } } };
    const expectedResult = { a: { b: { c: 1, d: 2 } } };

    expect(mergeObject(obj1, obj2)).toEqual(expectedResult);
  });
});

describe('readPropertyPath', () => {
  const obj = {
    person: {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        postalCode: '10001'
      }
    },
    arrayProp1: [1, 2, 3],
    arrayProp2: [{ name: 'name' }, { name: 'name' }]
  };

  it('should return the nested property value', () => {
    expect(readPropertyPath(obj, 'person/name')).toEqual('John');
    expect(readPropertyPath(obj, 'person/address/postalCode')).toEqual('10001');
    expect(readPropertyPath(obj, 'arrayProp1/1')).toEqual(2);
    expect(readPropertyPath(obj, 'arrayProp2/1/name')).toEqual('name');
  });

  it('should return undefined for non-existent property', () => {
    expect(readPropertyPath(obj, 'person/lastName')).toBeUndefined();
    expect(readPropertyPath(obj, 'person/address/street')).toBeUndefined();
    expect(readPropertyPath(obj, 'arrayProp1/10')).toBeUndefined();
  });

  it('should return undefined for invalid property path', () => {
    expect(readPropertyPath(obj, 'invalidPath')).toBeUndefined();
  });
});

describe('writeToPropertyPath', () => {
  let obj: { [key: string]: any };

  beforeEach(() => {
    obj = {
      person: {
        name: 'John',
        age: 30,
        address: {
          city: 'New York',
          postalCode: '10001'
        }
      },
      arrayProp: [1, 2, 3]
    };
  });

  it('should write value to a nested property', () => {
    writeToPropertyPath(obj, 'person/name', 'Alice');
    expect(obj.person.name).toBe('Alice');
  });

  it('should write value to an array property', () => {
    writeToPropertyPath(obj, 'arrayProp/1', 4);
    expect(obj.arrayProp[1]).toBe(4);
  });

  it('should write value to a new nested property', () => {
    writeToPropertyPath(obj, 'person/lastName', 'Doe');
    expect(obj.person.lastName).toBe('Doe');
  });

  it('should write value to a new array property', () => {
    writeToPropertyPath(obj, 'newArray/0', 'Hello');
    expect(obj.newArray[0]).toBe('Hello');
  });
});
