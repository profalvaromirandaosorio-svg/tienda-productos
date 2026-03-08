import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CardProducto from '../components/CardProductos.jsx';
import producto1 from '../assets/producto1.jpg';
import producto2 from '../assets/producto2.jpg';
import producto3 from '../assets/producto3.jpg';
import producto4 from '../assets/producto4.jpg';
import './Productos.css';

const Productos = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', imagen: producto1 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', imagen: producto2 },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3', imagen: producto3 },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del producto 4', imagen: producto4 },
  ];

  return (
    <>
      <Header />
      <main className="productos-main">
        <h2>Nuestros Productos</h2>
        <div className="productos-grid">
          {productos.map(p => (
            <CardProducto key={p.id} producto={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productos;