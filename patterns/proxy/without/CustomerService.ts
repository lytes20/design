import Customer from './Customer';
import CustomerDAOImp from './CustomerDAOImp';

class CustomerService {
  getCustomer(id: string): Customer {
    return new CustomerDAOImp().findCustomerById(id);
  }
  getAllCustomers(): Customer[] {
    return new CustomerDAOImp().findAllCustomers();
  }
}

export default CustomerService;
