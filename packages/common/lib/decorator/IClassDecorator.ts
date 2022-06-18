export interface IClassDecorator<T> {
  (data: T): ClassDecorator;
}
