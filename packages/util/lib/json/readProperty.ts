/**
 *
 * @param entity
 * @param pathString
 */
export const readPropertyPath = (
  entity: { [key: string]: any },
  propertyPath: string
) => {
  const paths: Array<string> = propertyPath.split('/');
  const value = paths.reduce((accumulator, currentValue) => {
    if (currentValue != '') {
      const propertyValue = accumulator[currentValue];

      return propertyValue;
    }

    return accumulator;
  }, entity);

  return value;
};
