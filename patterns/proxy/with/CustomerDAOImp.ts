import Customer from './Customer';
import CustomerDAO from './CustomerDAO';

class CustomerDAOImp implements CustomerDAO {
  findCustomerById(id: string): Customer {
    return new Customer(id, 'John Doe');
  }
  findAllCustomers(): Customer[] {
    return [];
  }
}

export default CustomerDAOImp;
