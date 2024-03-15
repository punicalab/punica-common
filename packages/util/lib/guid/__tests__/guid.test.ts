import { GUID } from '..';

describe('GUID', () => {
  it('should generate a valid UUID', () => {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    expect(GUID.uuid()).toMatch(uuidRegex);
  });

  it('should generate a different UUID on each call', () => {
    const uuid1 = GUID.uuid();
    const uuid2 = GUID.uuid();
    expect(uuid1).not.toEqual(uuid2);
  });
});
