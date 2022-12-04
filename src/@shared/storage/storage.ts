export interface Storage {
  add<T>(key: string, value: T): T;
  get<T = any>(key: string): T | undefined;
  remove(key: string): void;
}
