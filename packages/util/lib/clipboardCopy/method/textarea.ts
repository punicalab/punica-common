/**
 *
 * @param content
 */
const method = (content: string) => {
  const textArea = document.createElement('textarea');

  textArea.value = content;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';

  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  document.execCommand('copy');

  textArea.remove();
};

export default method;
