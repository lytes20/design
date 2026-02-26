package bank.service;

import java.util.Collection;
import bank.domain.Account;
import bank.interest.InterestStrategy;

public interface IAccountService {
    Account createAccount(long accountNumber, String customerName, InterestStrategy interestStrategy);
    Account getAccount(long accountNumber);
    Collection<Account> getAllAccounts();
    void deposit (long accountNumber, double amount);
    void withdraw (long accountNumber, double amount);
    void transferFunds(long fromAccountNumber, long toAccountNumber, double amount, String description);
    void addInterest();
}
