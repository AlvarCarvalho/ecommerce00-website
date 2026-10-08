import { Link } from "react-router-dom";

export default  function Navbar () {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand">
            ShopHub</Link>
            <div className="navbar-links">
            <Link to="/" className="navbar-link">Página Inicial</Link>
            <Link to="/checkout" className="navbar-link">Carrinho</Link>
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">Entrar</Link>
                    <Link to="/auth" className="btn btn-primary">Criar Conta</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

