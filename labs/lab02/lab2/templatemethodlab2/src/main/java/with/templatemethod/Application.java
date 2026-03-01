package with.templatemethod;

import without.templatemethod.Customer;
import without.templatemethod.VisaCard;
import without.templatemethod.MasterCard;

public class Application {
    public static void main(String[] args) {

        // Test Visa payment
        Customer customer1 = new Customer("Frank Brown", "fbrown@gmail.com");
        VisaCard visaCard = new VisaCard("1111 2222 3333 4444", "Frank Brown", "09/2026", 112);
        PaymentProcessor visaProcessor = new VisaPaymentProcessor(customer1, visaCard);
        System.out.println("---- VISA PAYMENT ----");
        visaProcessor.processPayment(100.0, "USD");

        System.out.println();

        // Test PayPal payment
        Customer customer2 = new Customer("John Doe", "jdoe@gmail.com");
        PaymentProcessor paypalProcessor = new PaypalPaymentProcessor(customer2);
        System.out.println("---- PAYPAL PAYMENT ----");
        paypalProcessor.processPayment(250.0, "EUR");

        System.out.println();

        // Test MasterCard payment
        Customer customer3 = new Customer("Jane Smith", "jsmith@gmail.com");
        MasterCard masterCard = new MasterCard("5555 6666 7777 8888", "Jane Smith", "12/2027", 456);
        PaymentProcessor masterCardProcessor = new MasterCardPaymentProcessor(customer3, masterCard);
        System.out.println("---- MASTERCARD PAYMENT ----");
        masterCardProcessor.processPayment(500.0, "GBP");
    }
}
