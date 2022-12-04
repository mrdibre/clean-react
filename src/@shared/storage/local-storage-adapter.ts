import { Storage } from "./storage";

export class LocalStorageAdapter implements Storage {
  add<T>(key: string, value: T): T {
    localStorage.setItem(key, JSON.stringify(value));

    return value;
  }

  get<T = any>(key: string): T | undefined {
    const value = localStorage.getItem(key) as unknown as T | undefined;

    return value;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
