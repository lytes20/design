export default class ReverseIterator<T> implements Iterator<T> {
  private items: T[];
  private index: number;

  constructor(items: T[]) {
    this.items = items;
    this.index = items.length - 1;
  }

  iterator(): Iterator<T> {
    return this;
  }

  hasNext(): boolean {
    return this.index >= 0;
  }

  next(): IteratorResult<T> {
    if (this.hasNext()) {
      return { value: this.items[this.index--], done: false };
    }
    return { value: undefined, done: true };
  }
}
