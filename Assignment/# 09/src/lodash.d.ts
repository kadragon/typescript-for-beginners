declare module "lodash" {
  function head<T>(array: T[]): T | undefined;
  function hasIn(object: object, key: string): boolean;
  function isBoolean<T>(value: T): boolean;
  function toString<T>(value: T): string;
  function split(
    string: string,
    separator: RegExp | string,
    limit: number
  ): string[];
  function hasPath(object: object, path: string[] | string): boolean;
  function filter<T>(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): T[];
  function every<T>(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): boolean;
  function map<T>(
    array: T[],
    iteratee: (value: T, index: number, array: T[]) => T
  ): T[];
}
