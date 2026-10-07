import { getProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const products = getProducts();
  console.log(products);
  return (
    <div className="page">
      <div className="home-hero">
        <h1>Bem-vindo ao ShopHub</h1>
        <p>Obtenha produtos incríveis com preços acessíveis.</p>
      </div>
      <div className="container">
        <h2 className="page-title">Lista de Produtos</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};
