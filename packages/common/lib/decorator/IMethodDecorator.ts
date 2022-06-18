export interface IMethodDecorator<T> {
  (data: T): MethodDecorator;
}
