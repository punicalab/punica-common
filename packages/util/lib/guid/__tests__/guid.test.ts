import { GUID } from '../';

describe('GUID', () => {
  let uuid: any;

  beforeAll(() => {
    uuid = GUID.uuid();
  });

  test('must return 16 character random guid', () => {
    expect(uuid).toHaveLength(36);
  });

  test('must return string', () => {
    expect(typeof uuid).toEqual('string');
  });

  test('must match generated uuid', () => {
    const pattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).toMatch(pattern);
  });
});
