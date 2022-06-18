export interface IConverter<T, R> {
  (data: T): R;
}
