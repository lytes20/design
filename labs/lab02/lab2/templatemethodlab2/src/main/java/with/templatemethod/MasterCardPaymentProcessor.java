package with.templatemethod;

import without.templatemethod.Customer;
import without.templatemethod.MasterCard;

public class MasterCardPaymentProcessor extends PaymentProcessor {
    private MasterCard masterCard;

    public MasterCardPaymentProcessor(Customer customer, MasterCard masterCard) {
        super(customer);
        this.masterCard = masterCard;
    }

    @Override
    protected void validate() {
        System.out.println("Validating MasterCard with card number " + masterCard.getCreditCardNumber());
    }

    @Override
    protected void performPayment(double amount, String currency) {
        System.out.println("Processing MasterCard payment of " + amount + " " + currency + " with card number " + masterCard.getCreditCardNumber());
    }

    @Override
    protected void sendReceipt() {
        System.out.println("Sending MasterCard payment receipt to " + customer.getName() + " at " + customer.getEmail() + " for card number " + masterCard.getCreditCardNumber());
    }
}
