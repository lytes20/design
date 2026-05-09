import CachingProxy from './CachingProxy';
import Customer from './Customer';
import CustomerDAO from './CustomerDAO';
import CustomerDAOImp from './CustomerDAOImp';

class CustomerService {
  customerDAO: CustomerDAO = new CustomerDAOImp();
  cachingProxy: CustomerDAO = new CachingProxy(this.customerDAO);
  // loggingProxy: CustomerDA =

  getCustomer(id: string): Customer {
    return this.cachingProxy.findCustomerById(id);
  }
  getAllCustomers(): Customer[] {
    return new CustomerDAOImp().findAllCustomers();
  }
}

export default CustomerService;
