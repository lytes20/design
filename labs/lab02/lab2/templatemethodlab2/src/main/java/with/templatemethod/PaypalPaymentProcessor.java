package with.templatemethod;

import without.templatemethod.Customer;

public class PaypalPaymentProcessor extends PaymentProcessor {

    public PaypalPaymentProcessor(Customer customer) {
        super(customer);
    }

    @Override
    protected void validate() {
        System.out.println("Validating PayPal account details...");
    }

    @Override
    protected void performPayment(double amount, String currency) {
        System.out.println("Processing PayPal payment of " + amount + " " + currency);
    }

    @Override
    protected void sendReceipt() {
        System.out.println("Sending PayPal payment receipt to " + customer.getName() + " at " + customer.getEmail());
    }
}
