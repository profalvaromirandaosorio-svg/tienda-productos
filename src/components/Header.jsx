// Importamos Link para poder navegar entre páginas
import { Link } from "react-router-dom";

import "./Header.css";

// Importamos el logo
import logo from "../assets/logo.png";

// Hooks de React
import { useEffect, useState } from "react";

// Creamos el componente Header
function Header() {

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Estado para mostrar el carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Cargar carrito desde el backend
  const cargarCarrito = () => {
    fetch("http://localhost:3001/carrito")
      .then(res => res.json())
      .then(data => setCarrito(data));
  };

  useEffect(() => {
    cargarCarrito();
  }, []);

  // Eliminar producto del carrito
  const eliminarProducto = async (id) => {

    await fetch(`http://localhost:3001/carrito/${id}`, {
      method: "DELETE"
    });

    // volver a cargar carrito
    cargarCarrito();
  };

  // calcular total
  const total = carrito.reduce(
    (acum, item) => acum + Number(item.precio || 0),
    0
  );

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
        <Link to="/Galeria">Galeria</Link>
      </nav>

      {/* Modal del carrito */}
      {mostrarCarrito && (

        <div className="modal-carrito">

          <div className="modal-contenido">

            <h2>Carrito de compras</h2>

            {carrito.length === 0 && (
              <p>No hay productos en el carrito</p>
            )}

            {carrito.map((item) => (

              <div key={item.id} className="item-carrito">

                <img
                  src={item.imagen}
                  width="50"
                  alt={item.nombre}
                />

                <div>
                  <h4>{item.nombre}</h4>
                  <p>Precio: ₡{item.precio}</p>
                </div>

                <button
                  onClick={() => eliminarProducto(item.id)}
                >
                  Quitar
                </button>

              </div>

            ))}

            <hr />

            <h3>Total a pagar: ₡{total}</h3>

            <button onClick={() => setMostrarCarrito(false)}>
              Cerrar
            </button>

          </div>

        </div>

      )}

      {/* Carrito */}
      <div
        className="carrito"
        onClick={() => setMostrarCarrito(true)}
      >
        Carrito {carrito.length}
      </div>

    </header>
  );
}

// Exportamos el componente
export default Header;