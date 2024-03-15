import 'reflect-metadata';

/**
 * Signature for a class decorator factory function.
 * @template T The type of data passed to the decorator factory.
 * @param data The data to be passed to the class decorator.
 * @returns A class decorator function.
 */
export interface ClassDecoratorFactory<T> {
  (data: T): ClassDecorator;
}

/**
 * Signature for a method decorator factory function.
 * @template T The type of data passed to the decorator factory.
 * @param data The data to be passed to the method decorator.
 * @returns A method decorator function.
 */
export interface MethodDecoratorFactory<T> {
  (data: T): MethodDecorator;
}

/**
 * Signature for a property decorator factory function.
 * @template T The type of data passed to the decorator factory. Default: null.
 * @param data The data to be passed to the property decorator.
 * @returns Any value.
 */
export interface PropertyDecoratorFactory<T = null> {
  (data: T): any;
}
