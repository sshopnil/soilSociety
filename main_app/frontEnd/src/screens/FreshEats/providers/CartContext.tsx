import React, { createContext, useContext, useState, ReactNode } from 'react';



export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface ShoppingCartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
  }


const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);



const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};


const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (newitem: CartItem) => {
    setCart((prevCart) => [...prevCart, newitem]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const contextValue: ShoppingCartContextProps = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>;
};

export { ShoppingCartProvider, useShoppingCart };
