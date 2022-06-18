/**
 * @jest-environment jsdom
 */

import { GetCookie } from '..';

describe('cookie', () => {
  test('get cookie with given cookie', () => {
    const testCookie = 'testCookie1=value1; testCookie2=value2';
    expect(GetCookie('testCookie1', testCookie)).toEqual('value1');
    expect(GetCookie('testCookie2', testCookie)).toEqual('value2');
  });

  test('get cookie with document cookie', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'testCookie3=value3; testCookie4=value4'
    });
    expect(GetCookie('testCookie3')).toEqual('value3');
    expect(GetCookie('testCookie4')).toEqual('value4');
  });

  test('must return null if given cookie is null or empty', () => {
    expect(GetCookie('nullCookie')).toBeNull();
    expect(GetCookie('nullCookie2', '')).toBeNull();
  });

  test('must return null if document cookie is empty', () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: ''
    });
    expect(GetCookie('nullCookie3')).toBeNull();
  });
});
