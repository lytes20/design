import SavingsInterestStrategy from "../Interest/SavingsInterestStrategy";
import Account from "./Account";

export default class AccountService {
  createAccount() {}
  deposit() {}
  withdraw() {}
  transferFunds() {}
  getAccount(): Account {
    const savingsStrategy = new SavingsInterestStrategy();
    const savingsAccount = new Account(savingsStrategy);
    return savingsAccount;
  }
  getAllAccounts(): Account[] {
    // List<Account> accounts = accountDAO.getAllAccounts();
    return [];
  }

  addInterest() {
    const accounts: Account[] = this.getAllAccounts();
    accounts.forEach((account) => {
      // const savingsInterest = new SavingsInterestStrategy();
      // account.setInterestStrategy(savingsInterest);
      const interest = account.calculateInterest();
      account.deposit(interest);
    });
  }
}
