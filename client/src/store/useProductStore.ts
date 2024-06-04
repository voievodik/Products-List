import create from "zustand";
import axios from "axios";
import { Product } from "../interfaces/product";

interface ProductStoreState {
  products: Product[];
  waitingDeleteId: string | null;
  waitingUpdate: Product | null;
  productDetails: Product | null;
  loading: boolean;
  fetchProducts: () => Promise<void>;
  handleSelectWaitingDeleteId: (id: string | null) => void;
  handleSelectWaitingUpdateCard: (card: Product | null) => void;
  handleSelectProduct: (card: Product | null) => void;
}

const API_URL = import.meta.env.VITE_BACKEND_URL;

const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data.products;
};

const useProductStore = create<ProductStoreState>((set) => ({
  products: [],
  waitingDeleteId: null,
  waitingUpdate: null,
  productDetails: null,
  loading: false,

  fetchProducts: async () => {
    set({ loading: true });

    try {
      const products = await fetchProducts();

      set({ products, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },

  handleSelectWaitingDeleteId: (id: string | null) => {
    set({ waitingDeleteId: id });
  },

  handleSelectWaitingUpdateCard: (card: Product | null) => {
    set({ waitingUpdate: card });
  },

  handleSelectProduct: (card: Product | null) => {
    set({ productDetails: card });
  },
}));

export default useProductStore;
