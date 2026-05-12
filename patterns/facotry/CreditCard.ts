class CreditCard {
  private type: string;
  private number: string;
  private limit: number;
  private annualCharge: number;
  constructor(type: string, number: string, limit: number, annualCharge: number) {
    this.type = type;
    this.number = number;
    this.limit = limit;
    this.annualCharge = annualCharge;
  }
}

export default CreditCard;
