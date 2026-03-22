import CeilingFan from './CeilingFan';

class App {
  static main(): void {
    const fan: CeilingFan = new CeilingFan();
    fan.pullGreen();
    fan.pullGreen();
    fan.pullRed();
    fan.pullRed();
  }
}

App.main();
