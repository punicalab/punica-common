import { default as navigatorMethod } from './method/navigator';
import textarea from './method/textarea';

/**
 *
 * @param content
 * @returns
 */
export const copyToClipboard = (content: string) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigatorMethod(content);
  } else {
    textarea(content);
  }
};
