import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../utils/context";

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
    return <div>Loading...</div>;
  }
  return <div>Single Product info {JSON.stringify(product)}</div>;
};

export default Product;
