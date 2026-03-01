package with.templatemethod;

import without.templatemethod.Customer;
import without.templatemethod.VisaCard;

public class VisaPaymentProcessor extends PaymentProcessor {
    private VisaCard visaCard;

    public VisaPaymentProcessor(Customer customer, VisaCard visaCard) {
        super(customer);
        this.visaCard = visaCard;
    }

    @Override
    protected void validate() {
        System.out.println("Validating Visa card with card number " + visaCard.getCreditCardNumber());
    }

    @Override
    protected void performPayment(double amount, String currency) {
        System.out.println("Processing Visa payment of " + amount + " " + currency + " with card number " + visaCard.getCreditCardNumber());
    }

    @Override
    protected void sendReceipt() {
        System.out.println("Sending Visa payment receipt to " + customer.getName() + " at " + customer.getEmail() + " for card number " + visaCard.getCreditCardNumber());
    }
}
