import CeilingFan from '../CeilingFan';
import FanState from '../FanState';
import High from './High';
import Low from './Low';

export default class Off implements FanState {
  fan: CeilingFan;
  constructor(fan: CeilingFan, start: boolean) {
    this.fan = fan;
    if (!start) {
      console.log('Turning off');
    }
  }
  pullGreen() {
    const newState = new Low(this.fan);
    this.fan.setState(newState);
  }
  pullRed() {
    const newState = new High(this.fan);
    this.fan.setState(newState);
  }
}
