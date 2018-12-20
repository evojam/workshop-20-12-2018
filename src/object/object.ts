interface Object {
  [Symbol.iterator] (): IterableIterator<[string, any]>
  [key: string]: any
}