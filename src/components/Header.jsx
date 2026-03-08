// Importamos Link para poder navegar entre páginas
import { Link } from "react-router-dom";

import "./Header.css";

// Importamos el logo
import logo from "../assets/logo.png";

// Creamos el componente Header
function Header() {
  return (
    <header className="header">
      
      {/* Contenedor del logo y nombre */}
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Empresa Metrotech</h1>
      </div>

      {/* Menú de navegación */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
      </nav>

    </header>
  );
}

// Exportamos el componente
export default Header;