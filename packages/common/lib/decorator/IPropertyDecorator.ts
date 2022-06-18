export interface IPropertyDecorator<T = null> {
  (data: T): any;
}
