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

  const getProductById = async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data.product;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider value={{ products, getProductById }}>
      {children}
    </AppContext.Provider>
  );
};

export default ProductProvider;
