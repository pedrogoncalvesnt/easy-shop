"use client"; // Next.js usa "use client" para Context API

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  img_path: string;
  value: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart((prevCart) => [...prevCart, product]); // Adiciona ao carrinho
 
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
