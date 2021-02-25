export interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  banner: string;
  developer_name: string;
  categories: string;
  ParentalRating: string;
  Description: string;
}

export interface ProductCart {
  quantity: number;
  product: Product;
}

export interface Cart {
  OrderTotal: number;
  OrderSubtotal: number;
  FreteTotal: number;
  products: ProductCart[];
}

export interface LocalStorageProductCart {
  quantity: number;
  product: number;
}

export interface LocalStorageCart {
  products: LocalStorageProductCart[];
}
