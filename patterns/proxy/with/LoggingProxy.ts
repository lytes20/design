import Customer from './Customer';
import CustomerDAO from './CustomerDAO';
import Logger from './Logger';

class LoggingProxy implements CustomerDAO {
  customerDAO: CustomerDAO;
  logger: Logger = new Logger();

  constructor(customerDAO: CustomerDAO) {
    this.customerDAO = customerDAO;
  }

  findCustomerById(id: string): Customer {
    const customer = this.customerDAO.findCustomerById(id);
    return customer;
  }
  findAllCustomers(): Customer[] {
    throw new Error('Method not implemented.');
  }
}

export default LoggingProxy;
