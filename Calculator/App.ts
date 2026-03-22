import Calculator from './Calculator';

class App {
  static main(): void {
    const cal = new Calculator();
    cal.add(10);
    cal.subtract(5);
    console.log('cal', cal);
  }
}

App.main();
