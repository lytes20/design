import PaymentProcessor from "./PaymentProcessor";

export default class PayPalPaymentProcessor extends PaymentProcessor {
  validate(): void {
    console.log("Validating paypal address");
  }
  performPayment(amount: number, currency: string): void {
    console.log("Making paypal payment");
  }
}
