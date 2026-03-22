import FanState from './FanState';

export default class CeilingFan {
  state: FanState;

  setState(state: FanState) {
    this.state = state;
  }

  pullGreen(): void {
    this.state.pullGreen();
  }

  pullRed(): void {
    this.state.pullRed();
  }
}
