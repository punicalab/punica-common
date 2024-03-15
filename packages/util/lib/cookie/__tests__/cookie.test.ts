import { getCookie, setCookie, deleteCookie } from '..';

// Mocking document.cookie
let originalDocumentCookie: string;
beforeEach(() => {
  originalDocumentCookie = document.cookie;
});

afterEach(() => {
  document.cookie = originalDocumentCookie;
});

describe('getCookie', () => {
  it('should return null if the cookie does not exist', () => {
    expect(getCookie('nonExistingCookie')).toBeNull();
  });

  it('should return the value of the cookie if it exists', () => {
    document.cookie = 'testCookie=testValue';
    expect(getCookie('testCookie')).toBe('testValue');
  });

  it('should return null if the cookie value is empty', () => {
    document.cookie = 'emptyCookie=';
    expect(getCookie('emptyCookie')).toBe('');
  });

  it('should return null if the cookie value contains only whitespace', () => {
    document.cookie = 'whitespaceCookie=   ';
    expect(getCookie('whitespaceCookie')).toBe('');
  });
});

describe('setCookie', () => {
  it('should set a cookie with the given key and value', () => {
    setCookie('testCookie', 'testValue');
    expect(document.cookie).toContain('testCookie=testValue');
  });

  it('should set a cookie with an empty value if value parameter is null', () => {
    setCookie('emptyValueCookie', null);
    expect(document.cookie).toContain('emptyValueCookie=');
  });

  it('should encode URL characters in cookie values', () => {
    setCookie('encodedCookie', 'test value');
    expect(document.cookie).toContain('encodedCookie=test value');
  });
});

describe('deleteCookie', () => {
  it('should delete the cookie by setting its expiration date to the past', () => {
    // Set a test cookie first
    document.cookie = 'testCookie=testValue';

    // Call deleteCookie
    deleteCookie('testCookie');

    // Expect the test cookie to be deleted
    expect(getCookie('testCookie')).toBeNull();
  });

  it('should not throw an error if the cookie does not exist', () => {
    // Expect no error to be thrown
    expect(() => deleteCookie('nonExistingCookie')).not.toThrow();
  });
});
