export default abstract class PaymentProcessor {
  processPayment(amount: number, currency: string): void {
    this.validate();
    this.performPayment(amount, currency);
    this.sendReceipt();
  }

  abstract validate(): void;
  abstract performPayment(amount: number, currency: string): void;
  sendReceipt(): void {
    console.log("Sending Receipt");
  }
}
