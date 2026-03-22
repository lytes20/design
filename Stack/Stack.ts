export default class Stack {
  arr: number[] = [];
  push(i: number) {
    this.arr.push(i);
  }
  pop(): number | null {
    let top: number | null = null;
    const values = this.arr[Symbol.iterator]();
    let next = values.next();
    while (!next.done) {
      top = next.value;
      next = values.next();
    }

    if (top !== null) {
      this.arr.pop();
    }
    return top;
  }
}
