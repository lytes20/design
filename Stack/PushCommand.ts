import { Command } from './Command';

export default class PushCommand implements Command {
  execute: () => void;
  unExecute: () => void;
}
