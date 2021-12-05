import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    const findProduct = cart.find(Product => Product === item);
    if (!findProduct) {
      setCart([...cart, item]);
    } else {
      toast.error("Item já adicionado", {
        className: "toastError",
      });
    }
  };

  const removeFromCart = item => {
    const filtered = cart.filter(itemOnCart => itemOnCart.name !== item.name);
    setCart(filtered);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
