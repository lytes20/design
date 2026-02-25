import InterestStrategy from "./InterestStrategy";

export default class SavingsInterestStrategy implements InterestStrategy {
  public calculateInterest(balance: number): number {
    if (balance < 1000) return balance * 0.01;
    if (balance < 5000) return balance * 0.02;
    return balance * 0.04;
  }
}
