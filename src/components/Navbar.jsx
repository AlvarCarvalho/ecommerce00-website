import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Página Inicial
          </Link>
          <Link to="/checkout" className="navbar-link">
            Carrinho
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Entrar
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Criar Conta
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Olá, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
