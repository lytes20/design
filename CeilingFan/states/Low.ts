import CeilingFan from '../CeilingFan';
import FanState from '../FanState';
import Medium from './Medium';
import Off from './Off';

export default class Low implements FanState {
  fan: CeilingFan;
  constructor(fan: CeilingFan) {
    this.fan = fan;
    console.log('Low speed');
  }
  pullGreen() {
    const newState = new Medium(this.fan);
    this.fan.setState(newState);
  }
  pullRed() {
    const newState: Off = new Off(this.fan, false);
    this.fan.setState(newState);
  }
}
