export default class FFAccount {
  accountNumber: string;
  accountType: string;
  numberOfMiles: number;
  numberOfFlights: number;

  constructor(accountNumber: string, accountType: string) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.numberOfMiles = 0;
    this.numberOfFlights = 0;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getAccountType(): string {
    return this.accountType;
  }

  getNumberOfMiles(): number {
    return this.numberOfMiles;
  }

  addFlight(newMiles: number): void {
    if (this.accountType === 'silver') {
      this.numberOfMiles += newMiles;
      this.numberOfFlights++;
      this.checkForUpgrade();
    } else {
      if (this.accountType === 'gold') {
        this.numberOfMiles += 2 * newMiles;
        this.numberOfFlights++;
        this.checkForUpgrade();
      } else {
        if (this.accountType === 'platinum') {
          this.numberOfMiles += 3 * newMiles;
          this.numberOfFlights++;
        }
      }
    }
  }

  private checkForUpgrade(): void {
    if (
      (this.accountType === 'silver' && this.numberOfMiles > 100000) ||
      this.numberOfFlights > 95
    ) {
      this.accountType = 'gold';
      this.numberOfMiles += 5000;
    }
    if (
      (this.accountType === 'gold' && this.numberOfMiles > 150000) ||
      this.numberOfFlights > 145
    ) {
      this.accountType = 'platinum';
      this.numberOfMiles += 10000;
    }
  }
}
