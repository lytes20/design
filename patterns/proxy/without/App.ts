import Customer from './Customer';
import CustomerService from './CustomerService';

class App {
  static main(): void {
    const customerService: CustomerService = new CustomerService();
    const customer: Customer = customerService.getCustomer('123');
    console.log(customer);
  }
}

App.main();
