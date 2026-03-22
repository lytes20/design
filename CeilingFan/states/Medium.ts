import CeilingFan from '../CeilingFan';
import FanState from '../FanState';
import High from './High';
import Low from './Low';

export default class Medium implements FanState {
  fan: CeilingFan;
  constructor(fan: CeilingFan) {
    this.fan = fan;
    console.log('Medium speed');
  }
  pullGreen() {
    const newState: High = new High(this.fan);
    this.fan.setState(newState);
  }
  pullRed() {
    const newState: Low = new Low(this.fan);
    this.fan.setState(newState);
  }
}
