/**
 * @template T Class type
 */
export interface Newable<T = any> {
  new (...args: any[]): T;
}
