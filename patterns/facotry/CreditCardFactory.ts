import CreditCard from './CreditCard';

class CreditCardFactory {
  static getCreditCardInstance(type: string, number: string, limit: number, annualCharge: number): CreditCard {
    return new CreditCard(type, number, limit, annualCharge);
  }
}

export default CreditCardFactory;
