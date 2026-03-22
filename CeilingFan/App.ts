import CeilingFan from './CeilingFan';
import Off from './states/Off';

class App {
  static main(): void {
    const fan: CeilingFan = new CeilingFan();
    fan.setState(new Off(fan, true));
    fan.pullGreen();
    fan.pullGreen();
    fan.pullRed();
    fan.pullRed();
  }
}

App.main();
