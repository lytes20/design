package bank.interest;

public class CheckingsInterestStrategy implements InterestStrategy {
    public double calculateInterest(double balance) {
        if (balance < 1000) return balance * 0.015;
        return balance * 0.025;
    }
}
