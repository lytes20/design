import FFAccount from './FFAccount';

class App {
  static main(): void {
    const ffaccount: FFAccount = new FFAccount('213425', 'silver');
    ffaccount.addFlight(13000);
    console.log('Accountnr =' + ffaccount.getAccountNumber());
    console.log('Account type =' + ffaccount.getAccountType());
    console.log('miles =' + ffaccount.getNumberOfMiles());

    ffaccount.addFlight(99000);
    console.log('Accountnr =' + ffaccount.getAccountNumber());
    console.log('Account type =' + ffaccount.getAccountType());
    console.log('miles =' + ffaccount.getNumberOfMiles());
  }
}

App.main();
