interface MiniStorage<T> {
  [key: string]: T;
}

abstract class LocalStorageAPI<T> {
  constructor(public storage: MiniStorage<T>) {}
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class localStorageAPI<T> implements LocalStorageAPI<T> {
  constructor(public storage: MiniStorage<T> = {}) {}
  setItem(key: string, value: T): void {
    if (this.storage[key]) {
      console.log(`${key} is exist`);
    } else {
      this.storage[key] = value;
    }
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string): void {
    delete this.storage[key];
  }
  clear(): void {
    this.storage = {};
  }
}

const stringLocalStorage = new localStorageAPI<string>();
stringLocalStorage.setItem("nico", "las");
stringLocalStorage.setItem("nico", "las");
stringLocalStorage.setItem("lynn", "ata");

console.log(stringLocalStorage.getItem("nico"));

stringLocalStorage.clearItem("lynn");
console.log(stringLocalStorage.getItem("lynn"));

stringLocalStorage.clear();
console.log(stringLocalStorage.getItem("nico"));

interface GeolocationAPI {
  getCurrentPosition(
    successFn: PositionCallback,
    errorFn?: PositionErrorCallback,
    optionsObj?: PositionOptions
  ): void;
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback,
    options?: PositionOptions
  ): void;
  clearWatch(id: number): void;
}
