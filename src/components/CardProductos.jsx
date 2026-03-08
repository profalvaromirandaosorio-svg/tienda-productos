import React from 'react';
import './CardProducto.css';

const CardProducto = ({ producto }) => {
  return (
    <div className="card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default CardProducto;