/**
 *
 * @param content
 */
const method = (content: string) => {
  navigator.clipboard
    .writeText(content)
    .then(() => {})
    .catch(() => {});
};

export default method;
