import create from "zustand";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export interface Store {
  products: Product[];
  users: User[];
  selectedProducts: Product[];
  fetchProducts: () => Promise<void>;
  fetchUsers: () => Promise<void>;
  addSelectedProduct: (product: Product) => void;
  removeSelectedProduct: (productId: number) => void;
}

export const useStore = create<Store>((set) => ({
  products: [],
  users: [],
  selectedProducts: [],
  fetchProducts: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    set({ products });
  },
  fetchUsers: async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();
    set({ users });
  },
  addSelectedProduct: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product],
    })),
  removeSelectedProduct: (productId) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.filter(
        (p) => p.id !== productId,
      ),
    })),
}));
