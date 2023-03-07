import { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";

import "./Products.css";
const Products = () => {
  useEffect(() => {}, []);

  return (
    <div className="products-container">
      <div id="products-title">
        <h1>All Products</h1>
      </div>
      <div className="products">
        <ProductCard
          url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="music audio player"
          price="5"
          id="5"
        />

        <ProductCard
          url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="music audio player"
          price="5"
          id="5"
        />
        <ProductCard
          url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="music audio player"
          price="5"
          id="5"
        />
        <ProductCard
          url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="music audio player"
          price="5"
          id="5"
        />
        <ProductCard
          url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="music audio player"
          price="5"
          id="5"
        />
      </div>
    </div>
  );
};

export default Products;
