import { useContext, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { AppContext } from "../../utils/context";

import "./Products.css";
const Products = () => {
  const { products } = useContext(AppContext);
  console.log(products);

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
        {products.map((product) => (
          <ProductCard
            url="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            title={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
