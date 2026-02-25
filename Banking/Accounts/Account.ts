import InterestStrategy from "../Interest/InterestStrategy";

export default class Account {
  private accountNumber: string;
  private balance: number;
  private interestStrategy: InterestStrategy;

  constructor(strategy: InterestStrategy) {
    this.interestStrategy = strategy;
  }

  deposit(value: number): boolean {
    return false;
  }
  withdraw() {}
  getBalance() {}
  transferFunds() {}

  public calculateInterest(): number {
    return this.interestStrategy.calculateInterest(this.balance);
  }

  public setInterestStrategy(strategy: InterestStrategy): void {
    this.interestStrategy = strategy;
  }
}
