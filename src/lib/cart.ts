import { Product } from "./mockData";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  availability: string;
}

const STORAGE_KEY = "shore_cart";

export const CartUtils = {
  get(): CartItem[] {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  save(items: CartItem[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("cart-updated"));
  },

  add(product: Product): void {
    const items = CartUtils.get();
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        category: product.category,
        availability: product.availability,
      });
    }
    CartUtils.save(items);
  },

  remove(id: string): void {
    const items = CartUtils.get().filter((item) => item.id !== id);
    CartUtils.save(items);
  },

  updateQty(id: string, qty: number): void {
    const items = CartUtils.get();
    const item = items.find((i) => i.id === id);
    if (item) {
      item.quantity = Math.max(1, qty);
    }
    CartUtils.save(items);
  },

  clear(): void {
    CartUtils.save([]);
  },

  count(): number {
    return CartUtils.get().reduce((sum, item) => sum + item.quantity, 0);
  },

  subtotal(): number {
    return CartUtils.get().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },

  tax(): number {
    return CartUtils.subtotal() * 0.06; // 6% Florida sales tax
  },

  total(): number {
    return CartUtils.subtotal() + CartUtils.tax();
  },
};
