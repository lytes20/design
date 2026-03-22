import Stack from './Stack';

class App {
  static main(): void {
    const stack: Stack = new Stack();
    stack.push(10);
    stack.push(20);
    const lastValue = stack.pop();
    console.log('lastValue', lastValue);

    const lastValue2 = stack.pop();
    console.log('lastValue', lastValue2);

    const lastValue3 = stack.pop();
    console.log('lastValue', lastValue3);

    const lastValue4 = stack.pop();
    console.log('lastValue', lastValue4);
    console.log('stack', stack);
  }
}
App.main();
