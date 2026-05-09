import Customer from './Customer';

interface CustomerDAO {
  findCustomerById(id: string): Customer;
  findAllCustomers(): Customer[];
}

export default CustomerDAO;
