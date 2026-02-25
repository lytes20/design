import InterestStrategy from "./InterestStrategy";

export default class CheckingsInterestStrategy implements InterestStrategy {
  public calculateInterest(balance: number): number {
    if (balance < 1000) return balance * 0.015;
    return balance * 0.025;
  }
}
