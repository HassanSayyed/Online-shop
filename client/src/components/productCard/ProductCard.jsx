import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ url, title, price, id }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={url} alt="product card" />
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price">${" " + price}</span>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  url: "",
  title: "product",
  price: 0,
  id: 0,
};
export default ProductCard;
