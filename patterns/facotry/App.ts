import CreditCard from './CreditCard';
import CreditCardFactory from './CreditCardFactory';

class App {
  static main(): void {
    // Using constructor
    const creditCard: CreditCard = new CreditCard('visa', '123456789', 2500, 10);

    // Using Factory
    const creditCard2: CreditCard = CreditCardFactory.getCreditCardInstance('visa', '123456789', 2500, 10);
  }
}
