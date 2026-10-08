import { createContext, useContext, useState } from "react";

interface CartContextModel {
  cart: string[];
  toggleItem: (id: string) => void;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextModel | undefined>(undefined);

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isInCart = (id: string) => cart.includes(id);

  return (
    <CartContext.Provider
      value={{
        cart,
        toggleItem,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Contexto no encontrado");
  }

  return context;
};
