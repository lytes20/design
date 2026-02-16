class Book {
  title: string;
  price: number;
  description: string;
  author: Author;
}

class Author {
  name: string;
  phone: string;
  email: string;
}

class BookOrderItem {
  //   book: Book;
  quantity: number;
}

class BookOrder {
  date: Date;
  //   items: BookOrderItem[];
  quantity: number;
}
class ShoppingCart {
  books: BookOrder[];
}

class Customer {
  name: string;
  phone: string;
  email: string;
  address: Address;
}
