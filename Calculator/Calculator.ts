class Calculator {
  private value: number;
  constructor(value: number = 0) {
    this.value = value;
  }

  add(newValue: number) {
    this.value = this.value + newValue;
  }
  subtract(newValue: number) {
    this.value = this.value - newValue;
  }
}

export default Calculator;
