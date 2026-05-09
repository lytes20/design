import Customer from './Customer';
import CustomerDAO from './CustomerDAO';

class CachingProxy implements CustomerDAO {
  customerCache: Map<string, Customer> = new Map();

  constructor(private customerDAO: CustomerDAO) {
    this.customerDAO = customerDAO;
  }
  findCustomerById(id: string): Customer {
    const cachedCustomer = this.customerCache.get(id);
    if (!cachedCustomer) {
      const customer = this.customerDAO.findCustomerById(id);
      this.customerCache.set(id, customer);
      return customer;
    }
    return cachedCustomer;
  }
  findAllCustomers(): Customer[] {
    throw new Error('Not implemented');
  }
}

export default CachingProxy;
