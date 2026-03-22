export default class CeilingFan {
  currentState = 0;

  pullGreen(): void {
    if (this.currentState == 0) {
      this.currentState = 1;
      console.log('Low speed');
    } else if (this.currentState == 1) {
      this.currentState = 2;
      console.log('Medium speed');
    } else if ((this.currentState = 2)) {
      this.currentState = 3;
      console.log('High speed');
    } else {
      this.currentState = 0;
      console.log('Turning off');
    }
  }

  pullRed(): void {
    if (this.currentState == 0) {
      this.currentState = 3;
      console.log('High speed');
    } else if (this.currentState == 1) {
      this.currentState = 0;
      console.log('Turning off');
    } else if ((this.currentState = 2)) {
      this.currentState = 1;
      console.log('Low speed');
    } else {
      this.currentState = 2;
      console.log('Medium off');
    }
  }
}
