import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.image}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{product.price}KZ</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            Ver Detalhes
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add ao Carrinho  {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
