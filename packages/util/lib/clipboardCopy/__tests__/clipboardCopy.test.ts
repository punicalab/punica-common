/**
 * @jest-environment jsdom
 */

document.execCommand = jest.fn();
import { default as navigatorMethod } from '../method/navigator';
import { default as textAreaMethod } from '../method/textarea';

describe('clipboard copy', () => {
  test('must copy the content with textarea method', () => {
    textAreaMethod('foo');
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    expect(document.execCommand).toHaveBeenCalledTimes(1);
  });

  test('must copy the content with navigator method', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve())
      }
    });
    navigatorMethod('foo');
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('foo');
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
  });
});
