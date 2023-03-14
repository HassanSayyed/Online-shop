import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../utils/context";
import "./Product.css";
const Product = () => {
  const { id } = useParams();
  const { getProductById } = useContext(AppContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [getProductById, id]);

  if (!product) {
    return <div className="loading-product">Loading </div>;
  }
  return (
    <div className="single-product-main-content">
      <div className="single-product-page">
        <div className="left">
          <img
            className="img"
            src={product.image ? product.image : "../assets/hero.jpg"}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="right">
          <div className="name">
            <h3>{product.name}</h3>
          </div>
          <div className="price">
            <h1>
              {product.price} <span id="dollar">$</span>
            </h1>
          </div>
          <div className="description">{product.description}</div>
        </div>
      </div>
      {/* Single Product info {JSON.stringify(product)} */}
    </div>
  );
};

export default Product;
