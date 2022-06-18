/**
 *
 * @param entity
 * @param pathString
 * @param value
 */
export const WriteToPropertyPath = (
  entity: { [key: string]: any },
  pathString: string,
  value: any
) => {
  const paths: Array<string> = pathString.split('/');

  paths.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentIndex == array.length - 1) {
      accumulator[currentValue] = value;

      return;
    }

    if (currentValue != '') {
      return accumulator[currentValue];
    }

    return accumulator;
  }, entity);
};
