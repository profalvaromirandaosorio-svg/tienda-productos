import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Galeria = () => {
  return (
    <>
      <Header />
      <main className="home-main">
        <h2>Bienvenido a la galeria de Metro</h2>
        <p>Ofrecemos los mejores productos para ti, disfruta tu compra.</p>
      </main>
      <Footer />
    </>
  );
};

export default Galeria;