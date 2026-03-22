import Calculator from './Calculator';
import { Command } from './Command';

export default class AddCommand implements Command {
  calculator: Calculator;
  value: number;
  execute() {
    this.calculator.add(this.value);
  }
}
