class Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}

class Customer {
  phone: string;
  email: string;
  address: Address;
}
class RentalRecord {
  //   customer: Customer;
  startDate: Date;
  maxDuration: number;
  endDate: Date;
  //   car: Car;
}

class Car {
  id: string;
  type: string;
}
class Reservation {
  date: Date;
  car: Car;
}
