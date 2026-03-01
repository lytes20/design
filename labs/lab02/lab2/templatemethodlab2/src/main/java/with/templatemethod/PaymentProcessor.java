package with.templatemethod;

import without.templatemethod.Customer;

public abstract class PaymentProcessor {
    protected Customer customer;

    public PaymentProcessor(Customer customer) {
        this.customer = customer;
    }

    public final void processPayment(double amount, String currency) {
        validate();
        performPayment(amount, currency);
        sendReceipt();
    }

    protected abstract void validate();
    protected abstract void performPayment(double amount, String currency);
    protected abstract void sendReceipt();
}
