import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  observations?: string;
  options?: string[];
};

type CartStore = {
  cartItems: CartItem[]; // Nome alterado aqui
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  total: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  addItem: (item) => {
    const newItem = { ...item, id: Math.random().toString() };
    set((state) => ({ cartItems: [...state.cartItems, newItem] })); // Alterado aqui
  },
  removeItem: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId), // Alterado aqui
    }));
  },
  clearCart: () => set({ cartItems: [] }),
  total: () => {
    return get().cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ); // Alterado aqui
  },
}));
