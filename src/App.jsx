import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
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