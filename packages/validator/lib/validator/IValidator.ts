export interface IValidator<D> {
  (data: D): boolean;
}
