export default interface InterestStrategy {
  calculateInterest(balance: number): number;
}
