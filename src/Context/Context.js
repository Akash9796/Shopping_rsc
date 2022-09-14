import React, { createContext, useEffect, useState } from "react";
export const Cart = createContext();

export default function Context({ children }) {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?page=1&limit=12"
      );
      const data = await response.json();
      setproducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <Cart.Provider value={{ products, cart, setCart, length, setLength }}>
      {children}
    </Cart.Provider>
  );
}

// export const CartState = Cart  ;
