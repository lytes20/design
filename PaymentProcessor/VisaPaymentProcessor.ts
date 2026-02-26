import PaymentProcessor from "./PaymentProcessor";

export default class VisaPaymentProcessor extends PaymentProcessor {
  validate(): void {
    console.log("Validating Visa Card");
  }
  performPayment(amount: number, currency: string): void {
    console.log("Performing Payment");
  }
}
