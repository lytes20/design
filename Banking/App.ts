import Account from "./Accounts/Account";
import AccountService from "./Accounts/AccountService";

class App {
  main() {
    const accountService: AccountService = new AccountService();

    accountService.addInterest();
  }
}
