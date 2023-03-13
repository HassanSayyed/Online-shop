import React, { createContext, useEffect, useState } from "react";
import api from "./api";

export const AppContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

export default ProductProvider;
