import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Productos from './pages/productos.jsx';
import Galeria from './pages/Galeria.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </Router>  
  );
}

export default App;
