package bank.interest;

public class SavingsInterestStrategy implements InterestStrategy{
    public double calculateInterest(double balance) {
        if (balance < 1000) return balance * 0.01;
        if (balance < 5000) return balance * 0.02;
        return balance * 0.04;
    }
}
