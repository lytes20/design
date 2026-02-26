import PayPalPaymentProcessor from "./PayPalPaymentProcessor";
import VisaPaymentProcessor from "./VisaPaymentProcessor";

class App {
  static main(): void {
    const visaProcessor: VisaPaymentProcessor = new VisaPaymentProcessor();
    visaProcessor.processPayment(100.0, "USD");

    const paypalProcessor: PayPalPaymentProcessor =
      new PayPalPaymentProcessor();
    paypalProcessor.processPayment(250.0, "EUR");
  }
}

App.main();
